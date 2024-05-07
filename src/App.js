import React, { Component } from 'react'
import { Navbar } from './Components/Navbar'
import Newss from './Components/Newss'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* since same news component is render everytime so we need to give unique key to everyone */}
          <Route exact path="/home" element={<Newss key="home" pageSize={9} country={"in"} category={""}/>}/>
          <Route exact path="/business" element={<Newss key="business"  pageSize={9} country={"in"} category={"business"}/>}/>
          <Route exact path="/entertainment" element={<Newss key="entertainment" pageSize={9} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/general" element={<Newss key="general" pageSize={9} country={"in"} category={"general"}/>}/>
          <Route exact path="/health" element={<Newss key="health" pageSize={9} country={"in"} category={"health"}/>}/>
          <Route exact path="/science" element={<Newss key="science" pageSize={9} country={"in"} category={"science"}/>}/>
          <Route exact path="/sports" element={<Newss key="sports" pageSize={9} country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<Newss key="technology" pageSize={9} country={"in"} category={"technology"}/>}/>
          
        </Routes>
        
        </BrowserRouter>
      </div>
    )
  }
}

export default App
