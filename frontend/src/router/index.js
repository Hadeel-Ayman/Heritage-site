import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login'

const Routero = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Routero
