import React from 'react'
import './Cart.css'

const Cart = ({productName,productPrice,productImage}) => {
  return (
    <div className='cart-container'>
      <div className="cartbody">
        <div className="productImage">
          <img src={productImage} alt="ProductImage" width={250} height={250} />
        </div>
        <div className="prodDetail">
          <span>{productName}</span>
          <span>{productPrice}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
