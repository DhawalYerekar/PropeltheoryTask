import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo">BRANDLYTICAL</h1>
      <ul> 
      <li> <a href="">About us</a></li>
      <li> <a href="">Our Services</a></li>
      <li> <a href="">Case Studies</a></li>
      <li><a href="">Press Release</a></li>
        </ul>
      {/* <a href="">Sign up</a>
      <a href="">Log in</a> */}
    </div>
    </nav>
  )
}

export default Navbar