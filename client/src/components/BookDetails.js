import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import Loader from './loader/Loader';
import { getBookQuery } from '../queries';
import BookDetailsView from './BookDetailsView';

const BookDetails = ({showIf, data}) => {

    if(!showIf){
        return null;
    }

    const { book, loading } = data;
    console.log("BookDetails -> book", book)

    return (
        <div id='book-details'>
            <BookDetailsView showIf={!loading && book} book={book}/>
            <Loader showIf={loading}/>
        </div>
    )
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);