import React, { Fragment } from 'react';

const AuthorOptions = ({ showIf, authors }) => {
    if(!showIf){
        return null;
    }

    return(
        <Fragment>
            {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
        </Fragment>
    )
}

export default AuthorOptions;