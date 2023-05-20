import React from 'react'
import './style.scss'


const Input = ({ name, placeholder, type, value, onChange }) => {
    return (
        <div className='inputdiv'>
            <input
                className='loginInput'
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value} />
        </div>
    )
}

export default Input
