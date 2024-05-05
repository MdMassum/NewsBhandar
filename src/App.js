import React, { Component } from 'react'
import { Navbar } from './Components/Navbar'
import Newss from './Components/Newss'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Newss pageSize={9}/>
      </div>
    )
  }
}

export default App
