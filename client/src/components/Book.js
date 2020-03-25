import React from 'react';

const Book = ({ book, setBookSelected }) => {
    if(!book){
        return null;
    }

    const { name, id } = book;
    const handleClick = (e) => setBookSelected(id);

    return(
        <li onClick={handleClick}>{name}</li>
    )
}

export default Book;