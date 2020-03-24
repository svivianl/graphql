const graphql = require('graphql');

const { GraphQLScalarType, Kind } = graphql;

module.exports = new GraphQLScalarType({
    // case sensitive
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      console.log("parseValue -> value: ", value)
      return new Date(value); // value from the client
    },
    serialize(value) {
      console.log("serialize -> value: ", value)
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      console.log("parseLiteral -> ast: ", ast)
      // if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      // }
      // return null;
    },
})