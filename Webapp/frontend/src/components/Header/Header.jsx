import React from 'react'
import danjr_logo from '../../assets/danjr_logo.png'
import './index.scss'
import {BrowserRouter as Router, Routes , Route , Link} from 'react-router-dom'
// import Home from '../bar/Home'
// import Menu from '../bar/Menu'
// import Contact from '../bar/Contact/Contact'
// import Aboutus from '../bar/Aboutus'
// import Reviews from '../bar/Reviews'


function Header() {
  return (
    <div className='header'>
        <img className='dan-image' src={danjr_logo} alt="error" />
        <span className='logo first'> DAN JR <span className='second'>WEDDING BIRYANI</span></span>
        <div className='bar'>
        <Link className='home' to='/'>Home</Link>
          <Link className='menu' to='/menu'>Menu</Link>
          <Link className='about' to='/aboutus'>About us</Link>
          <Link className='review' to='/reviews'>Reviews</Link>
          <Link className='contact' to='/contact'>Contact</Link>
        </div>
          
    </div>
  )
}

export default Header