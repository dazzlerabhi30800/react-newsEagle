import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar';

const News = (props) =>  {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   
    
    const CapitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
   

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({loading: true})
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
       
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${CapitalizeFirstLetter(props.category)} - NewsEagle`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    // async componentDidMount(){ 
       // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e1bd06f25544f399975122857782f19&pageSize=${props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles : parsedData.articles, 
        //     totalResults: parsedData.totalResults,
        //     loading : false
        // })

        // this.updateNews();
   //  }

   // const handlePrevClick = async () => {
       // console.log("Previous button was clicked!")
        
            // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
            // this.setState({loading : true})
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // console.log(parsedData);
            
            // this.setState({
            //     page: this.state.page-1,
            //     articles : parsedData.articles,
            //     loading : false,
            // })

            // this.setState({page : this.state.page - 1});
         //   setPage(page-1);
           // updateNews();
        
   // }
  //  const handleNextClick = async () => {
       // console.log("Next button was clicked!");
        // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize))){

        //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e1bd06f25544f399975122857782f19&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
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
        // this.setState({page : this.state.page + 1});
        // setPage(page+1);
        // updateNews();
    // }

    const fetchMoreData = async () => {
            // this.setState({page : this.state.page + 1}) 
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
            // this.setState({loading: true})
            setPage(page+1);
            let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        // this.setState({
        //     articles : this.state.articles.concat(parsedData.articles), 
        //     totalResults: parsedData.totalResults,
        //     // loading : false
        // })
      };

 
        
        return (
            <>
                <h1 className='text-center' style={{margin: '38px 0px', marginTop : '90px'}}>NewsEagle - Top {CapitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                >
               
                <div className="container">

                <div className="row">
                {articles.map((element)=> {
                    return  <div className="col-md-4"  key={element.url}>
                    <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" type='button' onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

                           
                           
           </>
        )
    
}

News.defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general',
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,

}

export default News
