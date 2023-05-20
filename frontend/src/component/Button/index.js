import React from 'react'
import './style.scss'

const Button = ({ type, title, src, color, backgroundColor }) => {
    return (
        <button
            className='mediaBtn'
            type={type}
            style={{ backgroundColor, color }}>
            <img src={src} alt='' />
            <h4>{title}</h4>
        </button>
    )
}

export default Button
