import React from 'react';
import './../ProductThumbnail.css';
import progress from './../progress.gif';

function Loader() {
    return (
        <div className="loaderClass">
           <img className="ImageClass" alt="progress" src={progress} />
        </div>
    )
}

export default Loader
