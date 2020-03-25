import React from 'react';
import './loader.css';

const Loader = ({ showIf }) => {
    if(!showIf){
        return null;
    }
    
    return(
        <div class="loader"></div> 
    )
}

export default Loader;