import React, {useState,useEffect} from 'react'
// import {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const Newss = (props)=>{

    const[articles,setArticles] = useState([])
    const[loading,setloading] = useState(false)
    const[page,setpage] = useState(1)
    const[totalResults,settotalResults] = useState(0)


    const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews=async()=>{
        
        props.setProgress(20);
        const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
        setloading(true);

        let data =await fetch(URL);
        let parsedata = await data.json();

        setArticles(parsedata.articles)
        settotalResults(parsedata.totalResults)
        setloading(false);
        
        props.setProgress(100);
    }
    const fetchMoreData = async() =>{
        
        
        const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
        setpage(page+1);

        setloading(true);
        let data =await fetch(URL);
        let parsedata = await data.json();

        setArticles(articles.concat(parsedata.articles))
        settotalResults(parsedata.totalResults)
        setloading(false);
        
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)?capitalizeFirstLetter(props.category) + " - " :""}NewsBhandar`
        updateNews()
    }, [])
    
    // const handlePrevClick= async()=>{

    //     setpage(page-1);
    //     updateNews();
    // }
    // const handleNexClick= async()=>{
 
    //     setpage(page+1);
    //     updateNews();
    // }

    return (
        <div className="container">
            <h2 className='text-center' style={{marginTop:'90px'}}>NewsBhandar - Top {capitalizeFirstLetter(props.category)} Headlines</h2>

            {/* bootstrap spinner */}

            {/* <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
            </div>
            </div> */}

            {loading && <Spinners/>}

            <InfiniteScroll 
            dataLength={articles.length} 
            next={fetchMoreData} 
            hasMore={articles.length !== totalResults} 
            loader={<Spinners/>}>

            <div className="container">
            <div className="row">
            {/* if(articles != null){ */}
            
            {(articles.map((element)=>{

                return <div className="col-md-4 my-3">
                        <NewsItem  key={element.url?element.url:"/"} title={element.title?element.title.slice(0,40)+"...":""} description={element.description?`${element.description.slice(0,90)}....`:" "} imageUrl={!element.urlToImage?"https://images.moneycontrol.com/static-mcnews/2023/03/396556799.jpg":element.urlToImage} newsUrl={element.url} author={element.author?element.author:"unknown"} date={new Date(element.publishedAt).toGMTString()}/>
                    </div>
            }))}
            </div>
            </div>

            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
            <button style={{cursor:'pointer'}} disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
            <button style={{cursor:'pointer'}} disabled={page*props.pageSize >= Math.ceil(totalResults)} type="button" className="btn btn-dark" onClick={handleNexClick}>Next &rarr; </button>
            </div> */}
        </div>
    )
}

Newss.defaultProps = {
    country:'in',
    pageSize:9,
    category:'general'
}
Newss.propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}
export default Newss