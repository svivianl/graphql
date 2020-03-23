// 1- define type
// 2- define relatinship between types
// 3- define root queries
const graphql = require('graphql');
// const _ = require('lodash');
const schemaTypes = require('./types');
const helper = require('./functions');
const db = require('../db');

const { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList} = graphql;
const { resolveCollection } = helper;
const { Books, Authors } = db;
const { AuthorType, BookType } = schemaTypes;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                const { id } = args;
                return resolveCollection(parseInt(id), Authors);
            }
        },
        book: {
            type: BookType,
            // arguments that will be passed on the query when it is looking for a book
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // get data from DB / 3rd party
                const { id } = args;
                return resolveCollection(parseInt(id), Books);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Authors;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});