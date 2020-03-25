import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import Loader from './loader/Loader';
import AuthorOptions from './AuthorOptions';
import { getAuthorsQuery } from '../queries';

const AddBookForm = ({ data }) => {
    const {loading, authors} = data;
    
    return(
        <Fragment>
            <form id="add-book">

                <div className='field'>
                    <label>Book name:
                        <input type='text'/>
                    </label>
                </div>

                <div className='field'>
                    <label>Genre:
                        <input type='text'/>
                    </label>
                </div>

                <div className='field'>
                    <label>Author:
                        <select>
                            <option>Select author</option>
                            <AuthorOptions showIf={!loading} authors={authors}/>
                        </select>
                    </label>
                </div>

                <button>+</button>
            </form>
            <Loader showIf={loading}/>
        </Fragment>
    )
}

export default graphql(getAuthorsQuery)(AddBookForm);