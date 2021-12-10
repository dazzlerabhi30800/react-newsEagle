import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    
    constructor(){
        super();
        
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }
    }

    async componentDidMount(){
        // console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9e1bd06f25544f399975122857782f19&pageSize=14";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async () => {
        console.log("Previous button was clicked!")
        
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page - 1}&pageSize=14`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            
            this.setState({
                page: this.state.page-1,
                articles : parsedData.articles,
            })
        
    }
    handleNextClick = async () => {
        console.log("Next button was clicked!");
        if(this.state.page +1 > Math.ceil(this.state.totalResults/14)){

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page + 1}&pageSize=14`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            
            this.setState({
                page: this.state.page+1,
                articles : parsedData.articles,
            })
        }
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
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button className="btn btn-dark" type='button' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

                           
                           
           </div>
        )
    }
}

export default News
