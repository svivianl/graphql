const graphql = require('graphql');
// const AuthorType = require('./AuthorType');
// const helper = require('../functions');
// const db = require('../../db');

// const _ = require('lodash')

const { GraphQLObjectType, GraphQLID, GraphQLString} = graphql;
// const { resolveCollection } = helper;
// const { Authors } = db;

module.exports = new GraphQLObjectType({
    // case sensitive
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        // author:{
        //     type: AuthorType,
        //     resolve(parent, args){
        //         const { authorId  } = parent;
        //         console.log("resolve -> authorId", authorId)
        //         return resolveCollection(authorId, Authors);
        //     }
        // }
    })
});
