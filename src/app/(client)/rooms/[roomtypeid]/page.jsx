'use client'
import React, { useState } from 'react';
import Login from '@/components/CustomerLogin/Login';
import Signup from '@/components/CustomerLogin/Signup';
import ReservationForm from '@/components/ReservationComponents/ReservationForm';
import PaymentForm from '@/components/ReservationComponents/PaymentForm';


const Page = ({ params }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isReservationCompleted, setIsReservationCompleted] = useState(false);
  const [reservationID, setReservationID] = useState(null);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleReservationComplete = (reservationID) => {
    setReservationID(reservationID);
    setIsReservationCompleted(true);
  };

  return (
    <div className=''>
      {!isLoggedIn && (
        <>
          {showSignup ? (
            <Signup onLoginClick={() => setShowSignup(false)} />
          ) : (
            <Login
              onSignupClick={() => setShowSignup(true)}
              onLoginSuccessfull={handleLoginSuccess}
            />
          )}
        </>
      )}
      {isLoggedIn && !isReservationCompleted && (
        <ReservationForm id={params.roomtypeid} onReservationComplete={handleReservationComplete} />
      )}
      {isLoggedIn && isReservationCompleted && <PaymentForm reservationID={reservationID}/>}
    </div>
  );
};

export default Page;
