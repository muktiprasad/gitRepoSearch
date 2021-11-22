import React from 'react';
import Languages from './Languages.js';

function Dropdown(props) {
    return (
           <select value={props.lang} onChange={e => props.onSelect(e)}>
            {Languages.map((language) => <option key={language.code} value={language.code}>
                {language.value}</option>)}
        </select> 
    )
}

export default Dropdown
