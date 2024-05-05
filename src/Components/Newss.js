import React, { Component } from 'react'
// import {useEffect, useState} from 'react'
import NewsItem from './NewsItem'

// api key = 9476293ec7554b0aab4cc02acb02b670


// render() { 
//     return (
//         <div className="container my-3">
//             <h2>NewsMonkey - Top Headlines</h2>
//             <h1>NewsMonkey - Top Headlines</h1> 
//             <div className="row"> 
//                 <div className="col-md-4">
//                     <NewsItem title="myTitle" description="mydesc" imageUrl="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg" newsUrl="TODO"/>
//                 </div>
//                 <div className="col-md-4">
//                     <NewsItem title="myTitle" description="mydesc"/>
//                 </div>
//                 <div className="col-md-4">
//                     <NewsItem title="myTitle" description="mydesc"/>
//             {this.state.articles.map((element)=>{
//                 return <div className="col-md-4" key={element.url}>
//                     <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
//                 </div> 
//             })} 
//             </div> 
//     )
// }



export class Newss extends Component {


    constructor(){
        super();
        console.log("I am constructor");
        this.state = {
          articles: [],
          loading:false
        }
    }
    
    async componentDidMount(){
    
        let URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9476293ec7554b0aab4cc02acb02b670";
        let data =await fetch(URL);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles});
        
    }

    
  render() {
    return (
        <div className="container my-3 mx-4">
            <h2>NewsMonkey - Top Headlines</h2>
            <div className="row">
            {/* if(this.state.articles != null){ */}
            {(this.state.articles.map((element)=>{
                
                return <div className="col-md-4 my-3">

                        <NewsItem  key={element.url?element.url:"/"} title={element.title?element.title.slice(0,40)+"...":""} description={element.description?`${element.description.slice(0,90)}....`:" "} imageUrl={!element.urlToImage?"https://images.moneycontrol.com/static-mcnews/2023/03/396556799.jpg":element.urlToImage} newsUrl={element.url}/>

                    </div>
            }))};
            </div>
        </div>
    )
  }
}

export default Newss