import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider} from 'react-apollo';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

function App() {
  return (
    <div className="App">
      <h1>Book's List</h1>
      <ApolloProvider client={client}>
        <BookList/>
      </ApolloProvider>
    </div>
  );
}

export default App;
