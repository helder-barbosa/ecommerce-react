import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function HomePageLayout(props) {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  )
}

export default HomePageLayout
