const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    // redirect to the GraphiQL
    graphiql: true
}))

app.listen(8000, () => console.log('server up'));