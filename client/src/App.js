import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider} from 'react-apollo';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

function App() {
  return (
    <div id="main">
      <h1>Book's List</h1>
      <ApolloProvider client={client}>
        <AddBook/>
        <BookList/>
      </ApolloProvider>
    </div>
  );
}

export default App;
