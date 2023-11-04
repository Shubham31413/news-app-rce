import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, url, urlToImage} = this.props;
    return (
        <div className="container">
            <div className="card" style={{height: '24rem', width: '18rem'}}>
                <img src={urlToImage} className="card-img-top" alt={`img: ${urlToImage}`} />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem