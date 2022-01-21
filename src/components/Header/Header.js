import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import logo from './../../../src/assets/e-commerce.png'
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux'

function Header(props) {
  const { currentUser } = props
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to="/">
            <img src={logo} alt='logo-ecommerce' />
          </Link>
        </div>

        <div className='callToActions'>

          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">
                  My Account
                </Link>
              </li>
              <li>
                <span className='logout' onClick={() => auth.signOut()}>
                  LOGOUT
                </span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>

              <li>
                <Link to="/registration">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          )}


        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  currentUser: null
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(Header)
