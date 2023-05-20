import React, { useReducer } from 'react'
import './style.css'

// axios
import axios from 'axios'
import { Localhost } from '../../config/api'

// component
import Input from '../../component/Input'
import Label from '../../component/Label'

// reducer
import { initalstate1, reducer1 } from '../../reducer/registerReducer'



const Register = () => {


  const [state, dispatch] = useReducer(reducer1, initalstate1)

  const username = state.username;
  const password = state.password;
  const email = state.email;


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({username, password, email})
    // const fetch = await axios.post(`${Localhost}/`)
  }

  return (
    <div className='register'>
      <form className='registerForm' onSubmit={handleSubmit}>
        <h1 className='signup'>Sign Up</h1>
        <div className='flex div1'>
          <Label title={'Username'} />
          <Input
            name={'username'}
            value={state.username}
            onChange={(e) => dispatch({ type: 'username', value: e.target.value })}
            placeholder={'Enter username'}
            type={'text'} />
        </div>

        <div className='flex'>
          <Label title={'Email'} />
          <Input
            name={'email'}
            value={state.email}
            onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
            placeholder={'Enter email'}
            type={'email'} />
        </div>


        <div className='flex div2'>
          <Label title={'Password'} />
          <Input
            name={'password'}
            value={state.password}
            onChange={(e) => dispatch({ type: 'password', value: e.target.value })}
            placeholder={'Enter password'}
            type={'password'} />
        </div>
        <button
          type='submit'
          className='registerBtn'>Register</button>
      </form>
    </div>
  )
}

export default Register

