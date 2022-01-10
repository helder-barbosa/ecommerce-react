import React from 'react'
import './Header.scss'
import logo from './../../../src/assets/e-commerce.png'

function Header(props) {
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <img src={logo} alt='logo-ecommerce' />
        </div>
      </div>
    </header>
  )
}

export default Header
