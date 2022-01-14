import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function MainLayout(props) {
  return (
    <div >
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
