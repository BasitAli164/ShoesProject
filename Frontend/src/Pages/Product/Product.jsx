import React from 'react'
import './Product.css'
import Cart from '../../components/Card/Cart'
import productImage from '../../assets/image/card/card1/5.avif'

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
          <div className="CartCompo">
          <Cart productImage={productImage} productName="Men's Shoes" productPrice="1234$"/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          </div>
        </div>
        </div>      
    </div>
  )
}

export default Product
