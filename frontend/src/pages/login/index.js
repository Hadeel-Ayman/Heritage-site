import React, { useReducer } from 'react'
import './style.css'
import axios from 'axios'
import { Input, Label } from '../../component'
import { initalstate, reducer } from '../../reducer/loginReducer'
import { Localhost } from '../../config/config'

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventdefault()
        // const fetch = await axios.post(`${Localhost}/`)
    }

    const [state, dispatch] = useReducer(reducer, initalstate)
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <Label title={'Username'} />
                <Input
                    name={'username'}
                    value={state.username}
                    onChange={(e) => dispatch({ type: 'username', value: e.target.value })}
                    placeholder={'Enter username'}
                    type={'text'} />

                <Label title={'Password'} />
                <Input
                    name={'password'}
                    value={state.password}
                    onChange={(e) => dispatch({ type: 'password', value: e.target.value })}
                    placeholder={'Enter password'}
                    type={'password'} />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
