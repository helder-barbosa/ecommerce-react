import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from './../../../src/assets/e-commerce.png'

function Header(props) {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to="/">
            <img src={logo} alt='logo-ecommerce' />
          </Link>
        </div>

        <div className='callToActions'>
          <ul>
            <li>
              <Link to="/registration">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
