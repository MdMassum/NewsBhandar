import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
        <div className="cards" >
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {author} on {date}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
        </div>
      </div>
    )
  }
}

export default NewsItem