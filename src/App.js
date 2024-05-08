import React, { Component } from 'react'
import { Navbar } from './Components/Navbar'
import Newss from './Components/Newss'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  // REACT_APP_NEWS_API = "9476293ec7554b0aab4cc02acb02b670";
  // REACT_APP_NEWS_API= "851984fb857c4a9a812426559933c627";
  // for environment variable
  // apikey = process.env.REACT_APP_NEWS_API
  apikey = "851984fb857c4a9a812426559933c627"
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}

        
      />
        <Routes>
          {/* since same news component is render everytime so we need to give unique key to everyone */}
          <Route exact path="/" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="home" pageSize={9} country={"in"} category={""}/>}/>
          <Route exact path="/home" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="home" pageSize={9} country={"in"} category={""}/>}/>
          <Route exact path="/business" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="business"  pageSize={9} country={"in"} category={"business"}/>}/>
          <Route exact path="/entertainment" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={9} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/general" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={9} country={"in"} category={"general"}/>}/>
          <Route exact path="/health" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={9} country={"in"} category={"health"}/>}/>
          <Route exact path="/science" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={9} country={"in"} category={"science"}/>}/>
          <Route exact path="/sports" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={9} country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<Newss setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={9} country={"in"} category={"technology"}/>}/>
          
        </Routes>
        
        </BrowserRouter>
      </div>
      </>
    )
  }
}

export default App
