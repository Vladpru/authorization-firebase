import React, { useState } from 'react';
import { loginWithEmailAndPassword } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const user = await loginWithEmailAndPassword(email, password)
      console.log(user)
      navigate('/')
    } catch(error) {
      console.error(error)
    }
  }

    return (
        <div>
          <h2>Login</h2>
          <form className='form' onSubmit={loginHandler}>
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
            <button >Login</button>
          </form>
          <p className='dont__account'>
            Don't have an account? <br/>
            <Link className='bottom__btn' to='/register'>Register now</Link>
          </p>
        </div>
    );
};

export default Login;