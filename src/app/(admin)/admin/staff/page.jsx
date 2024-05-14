"use client";
import AddStaffForm from "@/components/AdminComponents/StaffComponents/AddStaffForm";
import StaffDisplay from "@/components/AdminComponents/StaffComponents/StaffDisplay";
import { getAllStaffMembers } from "@/lib/AdminPanelFunctions/staffFunctions";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NotLoggedIn from "@/components/AdminComponents/NotLoggedIn";


const Page = () => {
  const [originalStaff, setOriginalStaff] = useState([]);
  const [staff, setStaff] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (!isAdmin || !token) {
      console.log('Not fetching staff members, either not admin or no token.'); // Debug
      return; // Avoid fetching if not admin or token is not set
    }
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
    fetchStaffMembers();
  }, [token, isAdmin]); // Added isAdmin dependency

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredStaff = originalStaff.filter((s) => s.staffid === searchParam);
    setStaff(searchParam ? filteredStaff : [...originalStaff]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      {showModal && <AddStaffForm onClose={handleCloseModal}/>}
      
    </div>
    ) : (
      <NotLoggedIn/>
    )}</>
  );
};

// Frontend Page Component

// const Page = () => {
//   const [token, setToken] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     setToken(storedToken);
//   }, []);

//   useEffect(() => {
//     const verifyAdmin = async () => {
//       try {
//         if (!token) {
//           return;
//         }
//         const response = await axios.get("http://localhost:5000/admin/verify-admin", {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setIsAdmin(true);
//       } catch (error) {
//         console.error(error);
//       }
//       setLoading(false);
//     };
//     verifyAdmin();
//   }, [token]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {isAdmin ? (
//         <div className="ml-44">
//           Logged in As Admin
//         </div>
//       ) : (
//         <div className="ml-28">Please login as an admin</div>
//       )}
//     </>
//   );
// };

export default Page;
