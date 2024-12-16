import React from 'react'
import './Product.css'
import Cart from '../../components/Card/Cart'
import productImage from '../../assets/image/card/card1/5.avif'
import {dummyProducts} from '../../assets/Data.js'
const Product = () => {
  console.log(dummyProducts)
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
            {
              dummyProducts.map((item)=>(
                <Cart productImage={item.images[0]} productName={item.title} productPrice={item.price}/>

              ))
              
            }
         
          </div>
        </div>
        </div>      
    </div>
  )
}

export default Product
