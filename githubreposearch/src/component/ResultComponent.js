import React from 'react';
import Loader from './Loader'

function ResultComponent({repoResults,loading}) {
    return (
        <div>
            {
           
            <div className="wrapperClass">
                {
                    loading ?  <Loader /> : repoResults
                }        
            </div>
             
        } 
        </div>
    )
}

export default ResultComponent
