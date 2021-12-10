import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://i0.wp.com/boingboing.net/wp-content/uploads/2021/12/product_183250_product_shots1.jpeg?fit=630%2C473&ssl=1" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
