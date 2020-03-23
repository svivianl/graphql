const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString} = graphql;

module.exports = new GraphQLObjectType({
    // case sensitive
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});
