import React from 'react'
import './Header.css'
import logo from '../../assets/image/logo.png'
import {Search, ShoppingCart,AccountCircle} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();
  return (
    <header className='header'>
        <section className='logoSection'>
            <img onClick={()=>navigate('/')} src={logo} alt="Logo" />
        </section>
        <section className='listSection'>
            <ul>
                <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/service')}>Service</li>
                <li onClick={()=>navigate('/about')}>About Us</li>
                <li onClick={()=>navigate('/contact')}>Contact</li>
            </ul>

        </section>
        <section className='iconSection'>
            <Search/>
            <ShoppingCart/>
            <AccountCircle/>

        </section>

      
    </header>
  )
}

export default Header
