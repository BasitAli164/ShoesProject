import React from 'react'
import './Button.css'
const Button = ({buttonText,buttonFunction}) => {
  return (
    <div className='button-container'>   
      <button onClick={buttonFunction}>{buttonText}</button>
    </div>
  )
}

export default Button
