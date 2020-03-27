import React from 'react';
import './loader.css';

const Loader = ({ showIf }) => {
    if(!showIf){
        return null;
    }

    return(
        <div className="loader">
            <div className="circular-progress"></div> 
        </div> 
    )
}

export default Loader;