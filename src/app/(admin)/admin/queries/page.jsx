'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import NotLoggedIn from "@/components/AdminComponents/NotLoggedIn";
import QueryCard from "@/components/AdminComponents/QueryComponents/QueryCard";


const page = () => {
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log('Retrieved token from storage:', storedToken);
    setToken(storedToken);
  
    const verifyAdmin = async () => {
      if (!storedToken) {
        console.log('No token found, setting admin to false and loading to false.');
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get("http://localhost:5000/admin/verify-admin", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        console.log('Response from verify-admin:', response.data); 
        // Assuming response.data.message means admin is verified:
        setIsAdmin(response.data.message === 'Admin verified');
      } catch (error) {
        console.error('Error verifying admin:', error);
        setIsAdmin(false);
      }
      setLoading(false);
    };
  
    verifyAdmin();
    
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQueries(response.data);
      console.log('Queries fetched:', response.data); // Debug: Log staff data
      
    } catch (error) {
      console.log("Failed to fetch queries:", error);
    }
  };

  useEffect(() => {
    if (!isAdmin || !token) {
      console.log('Not fetching qeuries, either not admin or no token.'); // Debug
      return; // Avoid fetching if not admin or token is not set
    }
    fetchQueries();
  }, [token, isAdmin]);

  const handleMarkAsRead = () => {
    fetchQueries(); // Reload queries after marking as read
  };

  return (
    <div>
      
      {isAdmin ? (
        <>
        <h1 className="text-gray-300 text-3xl py-6 text-center">Queries</h1>
        <div className="min-h-screen bg-gray-500 ml-20 flex flex-wrap gap-5 pb-8">
          {queries.map(query => (
              <QueryCard query={query} key={query.id} onMarkAsRead={handleMarkAsRead}/>
            ))}
        </div>
        </>
      ) : (
        <NotLoggedIn/>
      )}
    </div>
  )
}

export default page
