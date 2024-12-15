import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container'>
      <div className="footerbody">
        <div className="help">
          <h3>Help</h3>
          <p>+923475495500</p>
          <p>+923554214164(Text)</p>
          <p>Abdupa911@gmail.com</p>
          <p>Return/Exchanges</p>
          <p>FAQ/Contact Us</p>
          <p>After Pay</p>
        </div>
        <div className="shop">
          <h3>Shop</h3>
          <p>Men's Shoes</p>
          <p>Women's Shoes</p>

        </div>
        <div className="company">
          <h3>Company</h3>
          <p>Our's Store</p>
          <p>Our's Materials</p>
          <p>Investors</p>

        </div>
        <div className="allBasit">
          <h3>AllBasit's Responsible Disclosure Program</h3>
          <p>Pakistan Transparency Act
            Community Offers
            Our Blog - The Perch
            Follow the Flock</p>
            <p>Exclusive offers, a heads up on new things, and sightings of AllBasit's in the wild. Oh, we have cute sheep, too. #allbasit

</p>

        </div>
      </div>
      <div className="footerpart">
        <div className="icon">
          <Link to='https://www.Instagram.com' target='_blank'>   <InstagramIcon/> </Link>
          <Link to="https://www.facebook.com" target='_blank'><FacebookIcon/></Link>
          <Link to="https://www.whatsapp.com" target='_blank'><WhatsAppIcon/></Link>
        </div>
        <div className="copyright">
          <p>© 2024 Allbasit, Inc. All Rights Reserved. <Link to="#">Terms</Link> , <Link to="#">Privacy</Link> & <Link to="#">Accessibility</Link></p>
          <p>  Do Not Sell My Personal Information</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
