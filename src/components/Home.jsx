import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase-config';

const Home = () => {

  const [user, setUser] = useState({})
    
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

    return (
        <div>
            <p>Hello: {user?.email}</p>
        </div>
    );
};

export default Home;