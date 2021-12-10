import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        
            {
            "source": {
            "id": null,
            "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Rolls Out Updated Maps Interface in Australia",
            "description": "Apple today announced that it has expanded its updated Apple Maps app to Australia, with Maps now offering more detailed road coverage, improved navigation, three-dimensional landmarks, and improved views of parks, buildings, airports, shopping centers, and m…",
            "url": "https://www.macrumors.com/2021/12/09/apple-maps-australia/",
            "urlToImage": "https://images.macrumors.com/t/Ixiqr85VqkZeNwLCUUCimT9TqXI=/1960x/article-new/2021/12/apple-maps-australia.jpg",
            "publishedAt": "2021-12-10T00:12:33Z",
            "content": "Apple today announced that it has expanded its updated Apple Maps app to Australia, with Maps now offering more detailed road coverage, improved navigation, three-dimensional landmarks, and improved … [+1620 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "This Chargeworx 10,000mAh Power Bank with AirPods Holder can be your new BFF",
            "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nLook, 2021 has proved to be frustrating enough without the presence of your scatterbrain. Losing charge of all your e…",
            "url": "https://boingboing.net/2021/12/09/this-chargeworx-10000mah-power-bank-with-airpods-holder-can-be-your-new-bff.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2021/12/product_183250_product_shots1.jpeg?fit=630%2C473&ssl=1",
            "publishedAt": "2021-12-10T03:53:00Z",
            "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nLook, 2021 has proved to be frustrating enough without the … [+1721 chars]"
            },
            {
                "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
                },
                "author": "Joe Schneider",
                "title": "Apple Sued Over Broken Watch Screens That Injured Customers",
                "description": "Apple Inc.’s watch isn’t all it’s cracked up to be, a group of customers claims in a lawsuit over an alleged defect that it says can cause injuries.",
                "url": "https://www.bloomberg.com/news/articles/2021-12-10/apple-sued-over-broken-watch-screens-that-injured-customers",
                "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iEMVdmWDnW9M/v1/1200x800.jpg",
                "publishedAt": "2021-12-10T00:52:04Z",
                "content": "Apple Inc.s watch isnt all its cracked up to be, a group of customers claims in a lawsuit over an alleged defect that it says can cause injuries.\r\nThe customers say Apple, in its zeal for compactness… [+173 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Lexfridman.com"
            },
            "author": "Lex Fridman",
            "title": "Fridman: #247 – Jamie Metzl: Lab Leak Theory",
            "description": "Jamie Metzl is an author specializing in topics of genetic engineering, biotechnology, and geopolitics. Please support this podcast by checking out our sponsors: – Mizzen+Main: https://mizzenandmain.com and use code LEX to get $35 off – NI: https://www.ni.com…",
            "url": "https://lexfridman.com/jamie-metzl/",
            "urlToImage": "https://lexfridman.com/wordpress/wp-content/uploads/2021/12/thumb_jamie_metzl.png",
            "publishedAt": "2021-12-10T00:42:15Z",
            "content": "Podcast: Play in new window | Download\r\nSubscribe: Google Podcasts | Spotify | Stitcher | TuneIn | RSS\r\nJamie Metzl is an author specializing in topics of genetic engineering, biotechnology, and geop… [+1901 chars]"
            },
            ]
    
    constructor(){
        super();
        console.log("I am a constructor from news component!")
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='mb-3'>NewsEagle - Top Headlines</h2>
              
                <div className="row">
                {this.state.articles.map((element)=> {
                    return  <div className="col-md-4"  key={element.url}>
                    <NewsItem title = {element.title.slice(0,40)} description = {element.description.slice(0,80)} imageUrl = {element.urlToImage} newsUrl ={element.url} />
                    </div>
                })}
                           
                           
                 </div>
           </div>
        )
    }
}

export default News
