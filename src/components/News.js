import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    
    constructor(){
        super();
        
        this.state = {
            articles : [],
            loading : false
        }
    }

    async componentDidMount(){
        // console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9e1bd06f25544f399975122857782f19";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles})
    }

    render() {
        
        return (
            <div className='container my-3'>
                <h1 className='mb-3'>NewsEagle - Top Headlines</h1>
              
                <div className="row">
                {this.state.articles.map((element)=> {
                    return  <div className="col-md-4"  key={element.url}>
                    <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} newsUrl ={element.url} />
                    </div>
                })}
                           
                           
                 </div>
           </div>
        )
    }
}

export default News
