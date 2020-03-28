// ** do not split into files **
// const DateType = require('./DateType');
// const AuthorType = require('./AuthorType');
// const BookType = require('./BookType');

const graphql = require("graphql");
const db = require("../../db");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;
const { Author, Book } = db;

const { GraphQLScalarType, Kind } = graphql;

const DateType = new GraphQLScalarType({
  // case sensitive
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value) {
    console.log("parseValue -> value: ", value);
    return new Date(value); // value from the client
  },
  serialize(value) {
    console.log("serialize -> value: ", value);
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    console.log("parseLiteral -> ast: ", ast);
    // if (ast.kind === Kind.INT) {
    return new Date(ast.value); // ast value is always in string format
    // }
    // return null;
  }
});

const AuthorType = new GraphQLObjectType({
  // case sensitive
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    dateOfBirth: { type: DateType },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        const { id } = parent;
        return Book.find({ authorId: id });
      }
    }
  })
});

const BookType = new GraphQLObjectType({
  // case sensitive
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        const { authorId } = parent;
        return Author.findById(authorId);
      }
    }
  })
});

module.exports = { AuthorType, BookType, DateType };
