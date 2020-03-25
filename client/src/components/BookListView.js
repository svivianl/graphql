import React from 'react';
import Book from './Book';

const BookListView = ({ books }) => {
    
    if(!books){
        return null;
    }

    return(
        <ul id='book-list'>
            {books.map(book => <Book key={book.id} book={book}/>)}
        </ul>
    )
}

export default BookListView;