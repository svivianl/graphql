import React from "react";
import { graphql } from "react-apollo";
import Loader from "../../loader/Loader";
import { getBookQuery } from "../../../queries";
import BookDetailsView from "./BookDetailsView";
import "./bookDetails.css";

const BookDetails = ({ showIf, data }) => {
  if (!showIf) {
    return null;
  }

  const { book, loading } = data;

  return (
    <div id="book-details">
      <BookDetailsView showIf={!loading && book} book={book} />
      <Loader showIf={loading} />
    </div>
  );
};

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
