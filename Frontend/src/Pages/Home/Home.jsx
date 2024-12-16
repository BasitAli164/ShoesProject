import React from 'react'
import './Home.css'
import Button from '../../components/Buttons/Button'
import {Link} from "react-router-dom"

const Home = () => {
  const handleButton=()=>{
    alert("Hello I am a Button Component")
  }
  return (
    
    <div className="home-container">
      <div className="home-information">
      <h1>Welcome to Our Shop</h1>
      <h3>Discover our latest collection</h3>
      <p>Explore our wide range of high-quality products. We offer the best selection of goods for <Link to="/service" className='link'> Men</Link> and <Link to="/service" className='link'>Women</Link>. Whether you're looking for the latest trends or timeless classics, we have something for everyone. Our commitment to quality ensures that you get the best value for your money.

      </p>

      </div>
      <Button
      buttonFunction={handleButton}
      buttonText="Shop Now"
      />
    </div>
    
  )
}

export default Home
