import React from 'react'
import './style.css'


const Input = ({ name, placeholder, type, value, onChange }) => {
    return (
        <input
            className='loginInput'
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value} />
    )
}

export default Input