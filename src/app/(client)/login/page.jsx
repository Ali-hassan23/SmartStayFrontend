'use client'
import React, { useState } from 'react';
import Login from '@/components/CustomerLogin/Login';
import Signup from '@/components/CustomerLogin/Signup';

const Page = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className='pt-16'>
     
      {showSignup ? (
        <Signup onLoginClick={() => setShowSignup(false)}/>
      ) : (
        <Login onSignupClick={() => setShowSignup(true)} />
      )}
    </div>
  );
};

export default Page;
