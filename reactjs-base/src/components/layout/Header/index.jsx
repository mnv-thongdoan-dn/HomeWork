import React from 'react'
import Logo from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='page-header'>
      <img src={Logo} alt="logo"></img>
      <nav className='header-nav'>
        <ul className='header-nav-menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
