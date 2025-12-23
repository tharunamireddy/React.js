import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <h1>Navbar</h1>
      <div className='nav-items'>
        <Link to="/">
            <li>Home</li>
        </Link>
        <Link to="/counter">Counter</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  )
}

export default Navbar
