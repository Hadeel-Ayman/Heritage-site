import React, { useEffect, useState } from 'react'
import ServiceComponent from './serviceComponent'
import Category from './categoryname'
import axios from 'axios'
import { Localhost } from '../../config/api'
import './style.scss'


const Service = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        axios
            .get(`${Localhost}/service`)
            .then(data => setData(data.data))
            .catch(error => console.log(error));
    };


    //       localStorage.setItem("user", JSON.stringify(res));
    //       navigate("/");
    //       console.log(res);
    //     } 
    //   };

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>
            <Category />
            <div className='grid'>
                {
                    data.map((item, index) =>
                    (
                        <div key={index}>
                            <ServiceComponent
                                src={item.img}
                                img={item.avatar}
                                name={item.name}
                                desc={item.description}
                                price={item.price}
                            />
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}


export default Service
