import React, { Component } from 'react'
// import {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners';

export class Newss extends Component {

    

    constructor(){
        super();
        console.log("I am constructor");
        this.state = {
          articles: [],
          loading:false,
          page:1
        }
    }
    
    async componentDidMount(){
        
        let URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9476293ec7554b0aab4cc02acb02b670&page=1&pagesize=${this.props.pageSize}`;

        //for loading 
        this.setState({loading:true});

        let data =await fetch(URL);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles,
        totalResults:parsedata.totalResults,
        loading:false});
        // console.log(parsedata.totalResults);
        
    }
    handlePrevClick= async()=>{
       
        this.state.page = this.state.page - 1;
        let URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9476293ec7554b0aab4cc02acb02b670&page=${this.state.page}&pagesize=${this.props.pageSize}`;

        //for loading 
        this.setState({loading:true});

        let data =await fetch(URL);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles,
        loading:false});
    }
    handleNexClick= async()=>{
        
        this.state.page = this.state.page + 1;
        let URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9476293ec7554b0aab4cc02acb02b670&page=${this.state.page}&pagesize=${this.props.pageSize}`;

        //for loading 
        this.setState({loading:true});

        let data =await fetch(URL);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles,
        loading:false});
    }

  render() {
    // let {pageSize} = this.props;
    return (
        <div className="container my-3 mx-4">
            <h2 className='text-center'>NewsMonkey - Top Headlines</h2>

            {/* bootstrap spinner */}

            {/* <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden"></span>
            </div>
            </div> */}

            {this.state.loading && <Spinners/>}

            <div className="row">
            {/* if(this.state.articles != null){ */}
            {(this.state.articles.map((element)=>{
                
                return !this.state.loading && <div className="col-md-4 my-3">

                        <NewsItem  key={element.url?element.url:"/"} title={element.title?element.title.slice(0,40)+"...":""} description={element.description?`${element.description.slice(0,90)}....`:" "} imageUrl={!element.urlToImage?"https://images.moneycontrol.com/static-mcnews/2023/03/396556799.jpg":element.urlToImage} newsUrl={element.url}/>

                    </div>
            }))}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page*this.props.pageSize >= Math.ceil(this.state.totalResults)} type="button" className="btn btn-dark" onClick={this.handleNexClick}>Next &rarr; </button>
            </div>
        </div>
    )
  }
}

export default Newss