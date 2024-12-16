import React from 'react'
import './Product.css'
import Cart from '../../components/Card/Cart'


const Product = () => {
  return (
    <div className='productContainer'>
      <div className="productSwitch">
        <h1>Switch Par</h1>
      </div>
      <div className="productBody">
        <div className="productFilter">
          <h1>Filter part</h1>
        </div>
        <div className="productDetail">
          <h1>Detail</h1>
          <Cart/>
        </div>
        </div>      
    </div>
  )
}

export default Product
