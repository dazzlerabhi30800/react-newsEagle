import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    
                       
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex: '1'}}>
                           {source}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                  
                    <img
                        src={
                            imageUrl
                                ? imageUrl
                                : "https://image.cnbcfm.com/api/v1/image/106901117-16243999334181-Trading-Floor-OB-Photo-210622-PRESS-3-jpg?v=1625768375"
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text">
                            <small class="text-muted">
                                By {author} on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a
                            href={newsUrl}
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-sm btn-warning"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
