'use client'
import Login from '@/components/CustomerLogin/Login'
import Signup from '@/components/CustomerLogin/Signup'
import ReservationCard from '@/components/ReservationComponents/ReservationCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [reservations, setReservations] = useState([]); // Initialized as an empty array
  const [token, setToken] = useState(null);

  const fetchReservationData = async () => {
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:5000/reservation', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log("Response", response.data);
      setReservations(response.data || []); // Ensure it's always an array
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const cusToken = localStorage.getItem('customerToken');
    if (cusToken) {
      console.log("Token", cusToken);
      setToken(cusToken);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && token) {
      fetchReservationData();
    }
  }, [isLoggedIn, token]);

  return (
    <div className='pt-12'>
      {!isLoggedIn ? (
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
      ) : (
        <div>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <ReservationCard key={reservation.reservationid} reservation={reservation} />
            ))
          ) : (
            <p className='mt-44'>No reservations available</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Page
