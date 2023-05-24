import React from 'react'
import './style.scss'

const ServiceComponent = ({ src, img, name, desc, price }) => {
  return (
    <div className='serviceITem'>
      <img src={src} alt='' className='img' draggable='false' />

      <div className='flex'>
        <img src={img} alt='' className='avatar' />
        <h4>{name}</h4>
      </div>

      <div className='content'>
        <p>{desc}</p>
        <h5>{price}</h5>
      </div>
    </div>
  )
}

export default ServiceComponent
