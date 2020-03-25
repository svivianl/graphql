import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import BookListView from './BookListView';
import Loader from './loader/Loader';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

const BookList = ({ data }) => {
    const { books, loading } = data;

    return(
        <Fragment>
            <BookListView books={books}/>
            <Loader showIf={loading}/>
        </Fragment>
    )
}

export default graphql(getBooksQuery)(BookList);