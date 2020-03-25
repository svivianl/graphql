import React from 'react';

const Book = ({ book, bookSelected, setBookSelected }) => {
    if(!book){
        return null;
    }

    const { name, id } = book;
    const handleClick = (e) => setBookSelected(id);
    const className = bookSelected == id ? 'book-list-button selected': 'book-list-button';

    return(
        <li className={className} onClick={handleClick}>{name}</li>
    )
}

export default Book;