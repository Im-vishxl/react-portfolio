import React, { useState } from 'react'
import '../navbar/Navbar.css'
import logo from '../../assets/logo1.png'
import menu from '../../assets/menu.png'
import contactImg from '../../assets/mail.png'
import {Link} from 'react-scroll'

function Navbar() {
  const[showMenu, setshwoMenu] = useState(false)
  return (
    <nav className="Navbar">
        <Link to="intro" smooth={true} duration={500}>
          <img src={logo} alt="logo" className="logo"/>
        </Link>
        <div className="navMenu">
        <Link to="intro" activeClass='active' spy={true} smooth={true} duration={500} className="nav-item">
          Home
        </Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} className="nav-item">
          About
        </Link>
        <Link to="services" activeClass='active' spy={true} smooth={true} offset={60} duration={500} className="nav-item">
          Services
        </Link>
        <Link to="portfolio" activeClass='active' spy={true} smooth={true} offset={-80} duration={500} className="nav-item">
          Portfolio
        </Link>
        </div>
        <Link to="contact" smooth={true} offset={-80} duration={500} className="nav-contact">
          <button className="contactBtn"> 
                <h4>Contact Me</h4>
          </button>
        </Link>
        <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setshwoMenu(!showMenu)}/>
        <div className="navMenuMobile" style={{display:showMenu ?'flex': 'none'}}>
          <Link to="intro" activeClass='active' spy={true} smooth={true} duration={500} className="listitem" onClick={()=>setshwoMenu(false)}>
            Home
          </Link>
          <Link to="about" activeClass='active' spy={true} smooth={true} duration={500} className="listitem" onClick={()=>setshwoMenu(false)}>
            About
          </Link>
          <Link to="services" activeClass='active' spy={true} smooth={true} offset={60} duration={500} className="listitem" onClick={()=>setshwoMenu(false)}>
            Services
          </Link>
          <Link to="portfolio" activeClass='active' spy={true} smooth={true} offset={-80} duration={500} className="listitem" onClick={()=>setshwoMenu(false)}>
            Portfolio
          </Link>
          <Link to="contact" activeClass='active' spy={true} smooth={true} offset={-80} duration={500} className="listitem" onClick={()=>setshwoMenu(false)}>
            Contact
          </Link>
        </div>
    </nav>
  )
}

export default Navbar