import React, { Component } from 'react'
import '../App.css';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2023/04/morning-scan-770x431.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...<span className="badge rounded-pill text-bg-success">Success</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? " Unknown " : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsItem     