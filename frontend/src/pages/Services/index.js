import React, { useEffect, useState } from 'react'
import ServiceComponent from './serviceComponent'
import { Localhost } from '../../config/api'
import './style.scss'
import Category from './categoryname'


const Service = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch(`${Localhost}/service`)
            .then((res) => (res.json()))
            .then((data) => setData(data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Category />
            <div className='grid'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} >
                                <ServiceComponent
                                    src={item.img}
                                    img={item.avatar}
                                    name={item.name}
                                    desc={item.description}
                                    price={item.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Service
