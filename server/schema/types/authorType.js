const graphql = require('graphql');
const _ = require('lodash');
const BookType = require('./BookType');
const db = require('../../db');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList} = graphql;
const { Books } = db;

module.exports = new GraphQLObjectType({
    // case sensitive
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                const { id } = parent;
                return _.filter(Books, { authorId: id });
            }
        }
    })
});
