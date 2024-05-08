
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      
      <nav className=" navbar  navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/general">General</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>  
          </ul>
          
        </div>
      </nav>
    )
  }
}

export default Navbar