import React, { Component } from 'react'

const NewsItem = (props)=>{
  
    let {title,description,imageUrl,newsUrl,author,date} = props; // or we can do props.title,props.date etc like previously
    return (
        <div className="cards" >
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
        </div>
      </div>
    )
  
}

export default NewsItem