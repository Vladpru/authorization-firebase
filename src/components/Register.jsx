import React, { useState } from 'react';
import {registerWithEmailAndPassword} from '../firebase'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const registerHandler = async (e) => {
    e.preventDefault()
    try {
      const user = await registerWithEmailAndPassword(email, password)
      console.log(user)
      navigate('/')
    } catch(error) {
      console.error(error)
    }
  }


    return (
        <div>
          <h2>Register</h2>
          <form className='form' onSubmit={registerHandler}>
            <input 
              type="email"
              placeholder='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <input 
              type="password"
              placeholder='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <button >Register</button>
          </form>
          <p className='dont__account'>
            Have an account?
            <Link className='bottom__btn' to='/login'>Login</Link>
          </p>
        </div>
    );
};

export default Register;