import React, { Fragment, useState } from "react";
import Book from "./components/Book";
import BookDetails from "./components/BookDetails";
import "./bookList.css";

const BookListView = ({ books }) => {
  const [bookSelected, setBookSelected] = useState(null);

  if (!books) {
    return null;
  }

  return (
    <ul id="book-list">
      {books.map(book => (
        <Fragment key={book.id}>
          <Book
            book={book}
            bookSelected={bookSelected}
            setBookSelected={setBookSelected}
          />
          <BookDetails showIf={bookSelected === book.id} bookId={book.id} />
        </Fragment>
      ))}
    </ul>
  );
};

export default BookListView;
