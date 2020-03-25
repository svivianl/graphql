import { gql } from 'apollo-boost';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`

const getBookQuery = gql`
query GetBook($id: ID!){
    book(id: $id) {
        id
        name
        genre
        author {
            id
            name
            dateOfBirth
            books {
                name
                id
            }
        }
    }
}
`;


// !: required
const addBookMutation = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: String!){
    addBook(name:$name, genre: $genre, authorId: $authorId){
        name
        id
    }
}
`

export { 
    getBooksQuery, 
    getAuthorsQuery, 
    addBookMutation,
    getBookQuery
}