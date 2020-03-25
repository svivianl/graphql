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


// !: required
const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: String!){
    addBook(name:$name, genre: $genre, authorId: $authorId){
        name
        id
    }
}
`

export { getBooksQuery, getAuthorsQuery, addBookMutation }