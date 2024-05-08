import React, { Component } from 'react'
// import {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners';
import Proptypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Newss extends Component {

    static defaultProps = {
        country:'in',
        pageSize:9,
        category:'general'
    }
    static propTypes ={
        country:Proptypes.string,
        pageSize:Proptypes.number,
        category:Proptypes.string
    }
    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        console.log("I am constructor");
        this.state = {
          articles: [],
          loading:false,
          page:1,
          totalResults:0
        }
        
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsBhandar`
    }
    
    async updateNews(){

        this.props.setProgress(20);
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9476293ec7554b0aab4cc02acb02b670&page=${this.state.page}&pagesize=${this.props.pageSize}`;

        //for loading 
        this.setState({loading:true});

        let data =await fetch(URL);
        let parsedata = await data.json();
        this.setState({articles:parsedata.articles,
        totalResults:parsedata.totalResults,
        loading:false});
        this.props.setProgress(100);
    }
    fetchMoreData = async() =>{
        
        this.state.page = this.state.page+1;
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9476293ec7554b0aab4cc02acb02b670&page=${this.state.page}&pagesize=${this.props.pageSize}`;

        //for loading 
        this.setState({loading:true});

        let data =await fetch(URL);
        let parsedata = await data.json();
        this.setState({articles:this.state.articles.concat(parsedata.articles),
        totalResults:parsedata.totalResults,
        loading:false});
        
    }
    async componentDidMount(){
       
        this.updateNews();
        
    }
    // handlePrevClick= async()=>{
       
    //     // this.state.page = this.state.page - 1;
    //     // let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9476293ec7554b0aab4cc02acb02b670&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    //     // //for loading 
    //     // this.setState({loading:true});

    //     // let data =await fetch(URL);
    //     // let parsedata = await data.json();
    //     // console.log(parsedata);
    //     // this.setState({articles:parsedata.articles,
    //     // loading:false});

    //     // instead of above code we can call fn updateNews
    //     this.state.page = this.state.page-1;
    //     this.updateNews();
    // }
    // handleNexClick= async()=>{
        
    //     // console.log(this.state.page);
    //     this.state.page = this.state.page+1;
    //     // console.log(this.state.page);
    //     this.updateNews();
    // }

  render() {
    // let {pageSize} = this.props;

    return (
        <div className="container">
            <h2 className='text-center my-3'>NewsBhandar - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>

            {/* bootstrap spinner */}

            {/* <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden"></span>
            </div>
            </div> */}

            {this.state.loading && <Spinners/>}

            <InfiniteScroll 
            dataLength={this.state.articles.length} 
            next={this.fetchMoreData} 
            hasMore={this.state.articles.length !== this.state.totalResults} 
            loader={<Spinners/>}>

            <div className="container">
            <div className="row">
            {/* if(this.state.articles != null){ */}
            {(this.state.articles.map((element)=>{

                return <div className="col-md-4 my-3">

                        <NewsItem  key={element.url?element.url:"/"} title={element.title?element.title.slice(0,40)+"...":""} description={element.description?`${element.description.slice(0,90)}....`:" "} imageUrl={!element.urlToImage?"https://images.moneycontrol.com/static-mcnews/2023/03/396556799.jpg":element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} date={new Date(element.publishedAt).toGMTString()}/>
                    </div>
            }))}
            </div>
            </div>

            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
            <button style={{cursor:'pointer'}} disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button style={{cursor:'pointer'}} disabled={this.state.page*this.props.pageSize >= Math.ceil(this.state.totalResults)} type="button" className="btn btn-dark" onClick={this.handleNexClick}>Next &rarr; </button>
            </div> */}
        </div>
    )
  }
}

export default Newss