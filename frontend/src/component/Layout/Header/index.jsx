import React, { useState } from 'react'
import logo from '../../../assets/images/logo2.png'
import './style.scss'
import { BiMessageDetail } from "react-icons/bi";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SubHeader from './SubHeader';
import MenuTop from './SubHeader/MenuTop';

const Header = () => {
    const [show,isShow]=useState(false);
    const toggleShow =()=>{
        isShow(!show);
    }
    return (
        <div className='header'>
            <div className='top'>
                <div className="logo">
                    <img src={logo} alt="" />
                    <div className="search">
                        <form>
                            <input type="text" />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li><BiMessageDetail /></li>
                        <li><BsFillBagHeartFill /></li>
                        <li><AiOutlineShoppingCart /></li>
                        <li onClick={toggleShow}><img src="https://placehold.co/400" alt="" /></li>
                        {show&&<MenuTop/>}
                    </ul>
                </div>
            </div>
            <SubHeader/>
        </div>
    )
}

export default Header
