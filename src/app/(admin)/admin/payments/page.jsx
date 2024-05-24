'use client'
import NotLoggedIn from '@/components/AdminComponents/NotLoggedIn';
import Payments from '@/components/AdminComponents/Payments/Payments'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log('Retrieved token from storage:', storedToken);
    if (storedToken) {
      setToken(storedToken);
      verifyAdmin(storedToken);
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, []);

  const verifyAdmin = async (storedToken) => {
    try {
      const response = await axios.get("http://localhost:5000/admin/verify-admin", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      console.log('Response from verify-admin:', response.data);
      setIsAdmin(response.data.message === 'Admin verified');
    } catch (error) {
      console.error('Error verifying admin:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
      {isAdmin ? (
        <Payments />
      ) : (
        <NotLoggedIn/>
      )}
    </div>
    </div>
  )
}

export default page

