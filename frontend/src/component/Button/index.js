import React from 'react'
import './style.scss'

const Button = ({ title, src, color, backgroundColor }) => {
    return (
        <button className='mediaBtn' style={{ backgroundColor, color }}>
            <img src={src} alt='' />
            <h3>{title}</h3>
        </button>
    )
}

export default Button
