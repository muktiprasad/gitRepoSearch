import React,  { useState } from 'react';
import axios from 'axios';
import ProductThumbnail from './ProductThumbnail';
import ResultComponent from './ResultComponent';
import Dropdown from './Dropdown';
import './../ProductThumbnail.css';

function Search(props) {
    const [inputVal, setInputVal] = useState("");
    const [repos,setRepos] = useState([]);
    const [lang, setLang] = useState('javascript');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const changeValue = (value) => {
        setErr('');
        setInputVal(value)
      }
   
    const searchRepos = (e,keyword) => {
        e.preventDefault();
        if(!keyword.length) {
          setRepos([])
            setErr('Please enter Search Text');
            return;
        }
        setLoading(true)
            axios
            .get(`https://api.github.com/search/repositories?q=language:${lang}&${keyword}`)
            .then(result => {
                setRepos(result.data.items)
                setLoading(false)
              
              })
            .catch(e => {
             const myObj = {
                 id:null,
                 link:"",
                 name: "No Results Found!",
                 description:"",
                 owner:{avatar_url:null}
             }
             setRepos([myObj]);
            })
        } 
    const repoResults = repos.length ? repos.map(item => (
        <ProductThumbnail
          key={item.id}
          link={item.html_url}
          title={item.name}
          description={item.description}
          image={item.owner.avatar_url}
        /> 
      )) : '';
      const onSelect = (e) => {
         setLang(e.target.value);
      }
     return (
        <div>
            <h2>{props.header}</h2>
           <input
          type="text"
          placeholder={props.inputText}
          value={inputVal}
          onChange={event => changeValue(event.target.value)}
        />
       
        <Dropdown onSelect={onSelect} lang={lang}  />
        <button className="buttonClass" onClick={(e) => searchRepos(e,inputVal)}>
          {props.buttonText}
        </button>  
        {
          err.length > 0 && <div className="error">{err}</div>
        }
        <ResultComponent repoResults={repoResults} loading={loading}/>
        </div>
    )
}





export default Search
