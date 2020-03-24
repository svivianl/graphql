require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MLAB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('DB connected')
})

app.use('/graphql', graphqlHTTP({
    schema,
    // redirect to the GraphiQL
    graphiql: true
}))

app.listen(process.env.PORT, () => console.log('server up'));