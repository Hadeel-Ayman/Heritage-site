import React, { useReducer } from 'react'
import './style.css'

// axios
import axios from 'axios'
import { Localhost } from '../../config/api'

// component
import  Input from '../../component/Input'
import  Label from '../../component/Label'

// reducer
import { initalstate, reducer } from '../../reducer/loginReducer'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // const fetch = await axios.post(`${Localhost}/`)
    }

    const [state, dispatch] = useReducer(reducer, initalstate)
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h1 className='signin'>Sign in</h1>
                <div className='flex div1'>
                    <Label title={'Email'} />
                    <Input
                        name={'email'}
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                        placeholder={'Enter your email'}
                        type={'text'} />
                </div>

                <div className='flex div2'>
                    <Label title={'Password'} />
                    <Input
                        name={'password'}
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'password', value: e.target.value })}
                        placeholder={'Enter your password'}
                        type={'password'} />
                </div>

                <button
                    type='submit'
                    className='loginBtn'>Login</button>
            </form>
        </div>
    )
}

export default Login
