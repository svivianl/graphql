import React, { Fragment, useState } from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import Loader from './loader/Loader';
import AuthorOptions from './AuthorOptions';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries';

const initialValues = {
    name: '',
    genre: '',
    authorId:''
}

const AddBookForm = ({ authorsQuery, addBookMutation }) => {
    const [formValues, setFormValues] = useState(initialValues)

    const {loading, authors} = authorsQuery;
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, genre, authorId} = formValues;

        addBookMutation({
            variables:{
                name,
                genre,
                authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }

    return(
        <Fragment>
            <form id="add-book" onSubmit={handleSubmit}>

                <div className='field'>
                    <label>Book name:
                        <input type='text' onChange={e => setFormValues({...formValues, name: e.target.value})}/>
                    </label>
                </div>

                <div className='field'>
                    <label>Genre:
                        <input type='text' onChange={e => setFormValues({...formValues, genre: e.target.value})}/>
                    </label>
                </div>

                <div className='field'>
                    <label>Author:
                        <select onChange={e => setFormValues({...formValues, authorId: e.target.value})}>
                            <option>Select author</option>
                            <AuthorOptions showIf={!loading} authors={authors}/>
                        </select>
                    </label>
                </div>

                <button type='submit'>+</button>
            </form>
            <Loader showIf={loading}/>
        </Fragment>
    )
}

export default compose(
    graphql(getAuthorsQuery, {name: "authorsQuery"}), 
    graphql(addBookMutation, {name: "addBookMutation"}))
    (AddBookForm);