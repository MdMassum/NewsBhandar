import React from 'react'
import Navbar from './Components/Navbar'
import Newss from './Components/Newss'
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  // for environment variable
  const apikey = process.env.REACT_APP_API_URL;
 
  const[progress,setProgress] = useState(0)
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}

        
      />
        <Routes>
          {/* since same news component is render everytime so we need to give unique key to everyone */}
          <Route exact path="/home" element={<Newss setProgress={setProgress} apikey={apikey} key="home" pageSize={9} country={"in"} category={"general"}/>}/>
          <Route exact path="/business" element={<Newss setProgress={setProgress} apikey={apikey} key="business"  pageSize={9} country={"in"} category={"business"}/>}/>
          <Route exact path="/entertainment" element={<Newss setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={9} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/general" element={<Newss setProgress={setProgress} apikey={apikey} key="general" pageSize={9} country={"in"} category={"general"}/>}/>
          <Route exact path="/health" element={<Newss setProgress={setProgress} apikey={apikey} key="health" pageSize={9} country={"in"} category={"health"}/>}/>
          <Route exact path="/science" element={<Newss setProgress={setProgress} apikey={apikey} key="science" pageSize={9} country={"in"} category={"science"}/>}/>
          <Route exact path="/sports" element={<Newss setProgress={setProgress} apikey={apikey} key="sports" pageSize={9} country={"in"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<Newss setProgress={setProgress} apikey={apikey} key="technology" pageSize={9} country={"in"} category={"technology"}/>}/>
          
        </Routes>
        
        </BrowserRouter>
      </div>
      </>
  )
}