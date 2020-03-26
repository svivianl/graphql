import React, { Fragment } from 'react';

const BookDetailsView = ({showIf, book}) => {

    if(!showIf){
        return null;
    }

    const { genre, author } = book;

    return (
        <Fragment>
            <p>{ genre }</p>
            <p>{ author.name }</p>
            <p>All books by this author:</p>
            <ul className="other-books">
                { author.books.map(item => {
                    return <li key={item.id}>{ item.name }</li>
                })}
            </ul>
        </Fragment>
    )
}

export default BookDetailsView;