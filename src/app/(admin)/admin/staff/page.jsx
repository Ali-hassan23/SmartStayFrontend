"use client";
import AddStaffForm from "@/components/AdminComponents/StaffComponents/AddStaffForm";
import StaffDisplay from "@/components/AdminComponents/StaffComponents/StaffDisplay";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode, { jwtDecode } from "jwt-decode";
import NotLoggedIn from "@/components/AdminComponents/NotLoggedIn";


const Page = () => {
  const [originalStaff, setOriginalStaff] = useState([]);
  const [staff, setStaff] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // const clearToken = () => {
  //   localStorage.removeItem("token");
  //   setToken("");
  //   setIsAdmin(false);
  // };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log('Retrieved token from storage:', storedToken);
    // const jwtToken = jwtDecode(storedToken) ;
    // console.log("Expiration is in : " ,jwtToken.exp);
    setToken(storedToken);
    console.log("Token from token variable : ", token);
  
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

  const fetchStaffMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/staff", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Staff data fetched:', response.data); // Debug: Log staff data
      setStaff(response.data);
      setOriginalStaff(response.data);
    } catch (error) {
      console.log("Failed to fetch staff members:", error);
    }
  };

  useEffect(() => {
    if (!isAdmin || !token) {
      console.log('Not fetching staff members, either not admin or no token.'); // Debug
      return; // Avoid fetching if not admin or token is not set
    }
    fetchStaffMembers();
  }, [token, isAdmin]); // Added isAdmin dependency

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredStaff = originalStaff.filter((s) => s.staffid === searchParam);
    setStaff(searchParam ? filteredStaff : [...originalStaff]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    fetchStaffMembers();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>{isAdmin ? (
      <div className='min-h-screen bg-gray-500'>
      <div className='w-full flex flex-row justify-around items-center h-auto py-8'>
         <div>
          <form onSubmit={handleSubmit}>
          <input onChange={(e) => {setSearchParam(e.target.value)}} type="text" placeholder='Enter Staff Id' className='text-white bg-gray-600 h-10 px-3 w-72 rounded-l-lg'/>
          <button type='submit' className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 transition duration-300 rounded-r-lg">Search</button>
          </form>
          </div>
         
        <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300">Add Staff</button>
      </div>
      <StaffDisplay data={staff}/>
      {showModal && <AddStaffForm onClose={handleCloseModal} token={token}/>}
      
    </div>
    ) : (
      <NotLoggedIn/>
    )}</>
  );
};

export default Page;
