import React from 'react'
import ShopMen from './../../assets/shop-man.jpg'
import ShopWomen from './../../assets/shop-woman.jpg'
import './Directory.scss'

function Directory(props) {
  return (
    <div className='directory'>
      <div className='wrap'>
        <div
          className='item'
          style={{ backgroundImage: `url(${ShopMen})` }}>
          <a href='/'>Shop Mens</a>
        </div>
        <div
          className='item'
          style={{ backgroundImage: `url(${ShopWomen})` }}>
          <a href='/'>Shop Womens</a>
        </div>
      </div>
    </div>
  )
}

export default Directory
