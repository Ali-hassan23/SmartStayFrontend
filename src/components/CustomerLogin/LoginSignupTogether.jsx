'use client'
import Login from '@/components/CustomerLogin/Login';
import Signup from '@/components/CustomerLogin/Signup';
import React, { useState } from 'react';
 

const LoginSignupTogether = (onLoginSuccessfull) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  return (
    <div className='pt-6'>
      {showSignup ? (
        <Signup onLoginClick={() => setShowSignup(false)}/>
      ) : (
        <Login onSignupClick={() => setShowSignup(true)} onLoginSuccessfull={onLoginSuccessfull} />
      )}
    </div>
  );
};

export default LoginSignupTogether
