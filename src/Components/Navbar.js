import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className=" navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">NewsBhandar</NavLink>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/business">Business</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/general">General</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/health">Health</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/science">Science</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">Sports</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">Technology</NavLink>
            </li>  
          </ul>
          
        </div>
      </nav>
  )
}