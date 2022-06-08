import React from "react" 
import logo from "../Images/react-icon-small.png"

export default function Navbar(){
  return (
    <nav>
      <img src={logo} className="nav-logo" alt="Navbar logo"/>
      <h3 className="nav-title">ReactFacts</h3>
      <h4 className="nav-text">React Course - Project 1</h4>
    </nav>
  )
}