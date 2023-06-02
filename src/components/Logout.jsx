import React from 'react';
import { logout } from '../firebase'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const navigate = useNavigate()

    const Logout = async () => {
      try {
        logout()
        navigate('/login')
      } catch(error) {
        console.error(error)
      }
    }

    return (
        <div className='logout'>
            <button 
              className='logout__btn'
              onClick={Logout}
            >Logout</button>
        </div>
    );
};

export default Logout;