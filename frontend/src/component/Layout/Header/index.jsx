import React from 'react'
import logo from '../../../assets/images/logo.png'
import './style.scss'
import { BiMessageDetail } from "react-icons/bi";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
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
                        <li><BiMessageDetail/></li>
                        <li><BsFillBagHeartFill/></li>
                        <li><AiOutlineShoppingCart/></li>
                        <li><img src="https://placehold.co/400" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className='down'>
                category
            </div>
        </div>
    )
}

export default Header
