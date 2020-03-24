import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Book from './Book';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

const BookList = (props) => {
    console.log("BookList -> retorno", props)

    return(
        <div>
            <ul id='book-list'>
                <Book/>
            </ul>
        </div>
    )
}

export default graphql(getBooksQuery)(BookList);