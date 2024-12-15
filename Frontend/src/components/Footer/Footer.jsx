import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container'>
      <div className="footerbody">
        <div className="help">
          <h3>Help</h3>
        </div>
        <div className="shop">
          <h3>Shop</h3>
        </div>
        <div className="company">
          <h3>Company</h3>
        </div>
        <div className="allBasit">
          <h3>All</h3>
        </div>
      </div>
      <div className="footerpart">
        <div className="icon">Icons</div>
        <div className="copyright">Copy Right</div>
      </div>
    </div>
  )
}

export default Footer
