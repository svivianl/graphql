import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider} from 'react-apollo';
import AddBookForm from './components/addBookForm/AddBookForm';
import BookList from './components/bookList/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

function App() {
  return (
    <div id="main">
      <h1>Book's List</h1>
      <ApolloProvider client={client}>
        <AddBookForm/>
        <BookList/>
      </ApolloProvider>
    </div>
  );
}

export default App;
