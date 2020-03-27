require("dotenv").config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//to allow cross0origin requests
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("DB connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // redirect to the GraphiQL
    graphiql: true
  })
);

app.use(express.static("../client/build"));

app.listen(process.env.PORT, () => console.log("server up"));
