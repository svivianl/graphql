const DateType = require('./DateType');
// ** do not split into files **
// const AuthorType = require('./AuthorType');
// const BookType = require('./BookType');

const graphql = require('graphql');
const db = require('../../db');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = graphql;
const { Author, Book } = db;

const AuthorType = new GraphQLObjectType({
    // case sensitive
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        dateOfBirth: {type: DateType},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                const { id } = parent;
                return Book.find({ authorId: id })
            }
        }
    })
});

const BookType = new GraphQLObjectType({
    // case sensitive
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                const { authorId } = parent;                
                return Author.findById(authorId);
            }
        }
    })
});

module.exports = { AuthorType, BookType, DateType };