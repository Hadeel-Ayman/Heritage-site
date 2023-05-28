import React, { useEffect, useState } from 'react'
import ServiceComponent from './serviceComponent'
import Category from './categoryname'
import { Localhost } from '../../config/api'
import './style.scss'


const Service = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch(`${Localhost}/service`)
            .then((res) => (res.json()))
            .then((datafetch) => setData(datafetch))
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
                            <div key={index}>
                                <ServiceComponent
                                    to={`/service/${item._id}`}
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
