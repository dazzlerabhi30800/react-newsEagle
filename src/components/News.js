import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 6,
        category : 'general',
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,

    }
    CapitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    constructor(props){
        super(props);
        
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalResults : 0
        }
        document.title = `${this.CapitalizeFirstLetter(this.props.category)} - NewsEagle`;

    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading : false
        })
        this.props.setProgress(100);
    }

    async componentDidMount(){
        console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e1bd06f25544f399975122857782f19&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles : parsedData.articles, 
        //     totalResults: parsedData.totalResults,
        //     loading : false
        // })

        this.updateNews();
    }

    handlePrevClick = async () => {
        console.log("Previous button was clicked!")
        
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading : true})
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // console.log(parsedData);
            
            // this.setState({
            //     page: this.state.page-1,
            //     articles : parsedData.articles,
            //     loading : false,
            // })

            this.setState({page : this.state.page - 1});
            this.updateNews();
        
    }
    handleNextClick = async () => {
        console.log("Next button was clicked!");
        // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading: true})
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
            
        //     this.setState({
        //         page: this.state.page+1,
        //         articles : parsedData.articles,
        //         loading : false,
        //     })
        // }
        this.setState({page : this.state.page + 1});
        this.updateNews();
    }

    fetchMoreData = async () => {
            this.setState({page : this.state.page + 1});
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults,
            // loading : false
        })
      };

    render() {
        
        return (
            <>
                <h1 className='text-center' style={{margin: '38px 0px'}}>NewsEagle - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
                >
               
                <div className="container">

                <div className="row">
                {this.state.articles.map((element)=> {
                    return  <div className="col-md-4"  key={element.url}>
                    <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" type='button' onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

                           
                           
           </>
        )
    }
}

export default News
