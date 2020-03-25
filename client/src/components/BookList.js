import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import BookListView from './BookListView';
import Loader from './loader/Loader';
import { getBooksQuery } from '../queries';

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