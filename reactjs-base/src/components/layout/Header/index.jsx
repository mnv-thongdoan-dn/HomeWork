import React from 'react'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
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
            {
              user ? 
              <Link to='/account'>Account</Link> :
              <Link to='/login'>login</Link>
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}
