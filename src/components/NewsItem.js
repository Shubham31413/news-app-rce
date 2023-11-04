import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, url, urlToImage, mode, style} = this.props;
    return (
        <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: style.background}}>
            <div className="card" style={{height: '28rem', width: '22rem', background: (mode === 'light' ? '#fff' : '#0C356A'), border: (mode === 'light' ? "1px solid black" : "1px solid '#212529'")}}>
                <img src={urlToImage} className="card-img-top" style={{height: '18rem', width: '100%'}} alt={`img: ${urlToImage}`} />
                <div className="card-body">
                    <h6 className="card-title" style={{color: (mode === 'light' ? '#000' : '#fff')}}>{title}</h6>
                    <p className="card-text" style={{color: mode === 'light' ? '#000' : '#fff'}}>{description}</p>
                    <a href={url} className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem