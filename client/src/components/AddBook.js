import React
// , { Fragment } 
from 'react';
// import { gql } from 'apollo-boost';
// import { graphql } from 'react-apollo';
// import Loader from './loader/Loader';
import AddBookForm from './AddBookForm';

// const addBookQuery = gql`
// {
//     books{
//         name
//         id
//     }
// }
// `

const AddBook = ({ data }) => {
    // const {  } = data;

    return(
        <AddBookForm/>
    )
}

export default AddBook;
// export default graphql(addBookQuery)(AddBook);