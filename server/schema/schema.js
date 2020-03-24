// 1- define type
// 2- define relatinship between types
// 3- define root queries
const graphql = require('graphql');
const schemaTypes = require('./types');
const db = require('../db');

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLString,
    GraphQLNonNull
} = graphql;
const { Book, Author } = db;
const { AuthorType, BookType, DateType } = schemaTypes;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                const { id } = args;
                return Author.findById(id);
            }
        },
        book: {
            type: BookType,
            // arguments that will be passed on the query when it is looking for a book
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // get data from DB / 3rd party
                const { id } = args;
                return Book.findById(id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find();
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Author.find();
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addAuthor:{
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                dateOfBirth: {type: new GraphQLNonNull(DateType)}
            },
            resolve(parent, args){
                const {name, dateOfBirth} = args;
                let author = new Author({
                    name,
                    dateOfBirth
                })
                return author.save();
            }
        },
        addBook:{
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)},
                genre: { type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                const {name, genre, authorId} = args;
                let book = new Book({
                    name,
                    genre, 
                    authorId
                })
                return book.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});