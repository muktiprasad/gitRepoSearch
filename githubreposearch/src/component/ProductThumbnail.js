import React from 'react';
import './../ProductThumbnail.css';


function ProductThumbnail({link,image,title,description}) {
    return (
        <div className="container">
        <a href={link}>
          <img alt="" className="ImageClass" src={image} />
        </a>
        <div className="ThumbnailBody">
          <h2 className="titleClass">{title}</h2>
          <h3 className="descriptionClass">{description}</h3>
        </div>  
        </div>
    )
}

export default ProductThumbnail
