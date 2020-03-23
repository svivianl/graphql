// 1- define type
// 2- define relatinship between types
// 3- define root queries
const graphql = require('graphql');
const schemaTypes = require('./types');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLID, GraphQLSchema} = graphql;

// fake data
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = max ? Math.floor(max) : 0;
    return max ? (Math.floor(Math.random() * (max - min)) + min) : (Math.floor(Math.random() * Math.floor(max)));
}
const fakeAuthors = (numberOfAuthors) => {
    const authors = [];

    for(let i = 0; i < numberOfAuthors; i++){
        authors.push({
            id: i.toString(),
            name: `Author ${i}`,
            age: getRandomInt(20, 90)
        })
    }

    return authors;
}
const genres = ['Fantasy', 'Sci-Fi', 'Drama']
const fakeBooks = (numberOfBooks) => {
    const books = [];

    for(let i = 0; i < numberOfBooks; i++){
        books.push({
            id: i.toString(),
            name: `Book ${i}`,
            genre: genres[getRandomInt(3)]
        })
    }

    return books;
}

const books = fakeBooks(5);
const authors = fakeAuthors(10);

const { AuthorType, BookType } = schemaTypes;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                const { id } = args;
                return _.find(authors, { id });
            }
        },
        book: {
            type: BookType,
            // arguments that will be passed on the query when it is looking for a book
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // get data from DB / 3rd party
                const { id } = args;
                return _.find(books, {id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});