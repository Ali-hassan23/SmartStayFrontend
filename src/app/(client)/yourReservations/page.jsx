'use client'
import Login from '@/components/CustomerLogin/Login'
import Signup from '@/components/CustomerLogin/Signup'
import ReservationCard from '@/components/ReservationComponents/ReservationCard'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [reservations, setReservations] = useState([]);
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
      setReservations(response.data || []); 
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
        <div className='w-screen' >
          {reservations.length > 0 ? (
            <div className='d-flex items-center justify-center'>
            {reservations.map((reservation) => (
              <ReservationCard key={reservation.reservationid} reservation={reservation} />
            ))}
          </div>
          ) : (
            <div className='h-screen w-screen flex items-center justify-center'>
              <p>No reservations available</p>
              <Link href={'/rooms'} className='className="bg-gray-800  hover:bg-gray-700 text-white w-auto font-semibold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"'>Check Out Rooms</Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Page
