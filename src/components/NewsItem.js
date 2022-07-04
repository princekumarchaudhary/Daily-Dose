import React from 'react'

const NewsItem = (props)=>{
    
    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl} className="card-img-top " height={200} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sn btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
}

export default NewsItem
