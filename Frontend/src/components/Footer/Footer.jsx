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
        <div className="infor">
          <h3 className='headings'>Help</h3>
          <div className="text t3">
          <p>+923475495500</p>
          <p>+923554214164(Text)</p>
          <Link className='link' to="#">Abdupa911@gmail.com</Link>
          <p>Return/Exchanges</p>
          <p>FAQ/Contact Us</p>
          <p>After Pay</p>
          </div>
        </div>
        <div className="infor">
          <h3 className='headings'>Shop</h3>
          <div className="text t3">
          <p>Men's Shoes</p>
          <p>Women's Shoes</p>

          </div>
        </div>
        <div className="infor ">
          <h3 className='headings'>Company</h3>
          <div className="text t3">
          <p>Our's Store</p>
          <p>Our's Materials</p>
          <p>Investors</p>

          </div>
        </div>
        <div className="infor">
          <h3 className='headings'>AllBasit's Responsible Disclosure Program</h3>
          <div className="text t3">
          <p>Pakistan Transparency Act
            Community Offers
            Our Blog - The Perch
            Follow the Flock</p>
            <p>Exclusive offers, a heads up on new things, and sightings of AllBasit's in the wild. Oh, we have cute sheep, too. #allbasit

</p>
          </div>

        </div>
      </div>
      <div className="footerpart">
        <div className="icon">
          <Link className='link' to='https://www.Instagram.com' target='_blank' title='Instagram'>   <InstagramIcon/> </Link>
          <Link className='link' to="https://www.facebook.com" target='_blank' title='Facebook'><FacebookIcon/></Link>
          <Link className='link' to="https://www.whatsapp.com" target='_blank' title='Whatsapp'><WhatsAppIcon/></Link>
        </div>
        <div className="copyright">
          <p>© 2024 Allbasit, Inc. All Rights Reserved. <span className='t3'><Link to="#" className='link'>Terms</Link> , <Link to="#" className='link'>Privacy</Link> & <Link to="#" className='link'>Accessibility</Link> </span> </p>
          <p>  Do Not Sell My Personal Information</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
