import React from 'react';

const Book = ({ book }) => {
    if(!book){
        return null;
    }

    const { name, genre } = book;

    return(
        <li>{name}</li>
    )
}

export default Book;