import React from "react";
import classNames from "classnames";
import "./book.css";

const Book = ({ book, bookSelected, setBookSelected }) => {
  if (!book) {
    return null;
  }

  const { name, id } = book;
  const handleClick = e => setBookSelected(id);
  const className = classNames({
    "book-list-button": true,
    selected: bookSelected === id
  });

  return (
    <li className={className} onClick={handleClick}>
      {name}
    </li>
  );
};

export default Book;
