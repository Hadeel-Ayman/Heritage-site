import React from 'react'
import logo1 from '../../images/logo1.png'
import logo from '../../images/logo.png'
import './style.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo1} alt='' className='logo'/>
            {/* <img src={logo} alt='' className='logo'/> */}
        </div>
    )
}

export default Header
