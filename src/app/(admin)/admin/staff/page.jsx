'use client'
import AddStaffForm from '@/components/AdminComponents/AddStaffForm';
import StaffDisplay from '@/components/AdminComponents/StaffDisplay';
import { getAllStaffMembers } from '@/lib/AdminPanelFunctions/staffFunctions';
// import Link from 'next/link';
import React, { useEffect, useState } from "react";

const page = () => {
    const [originalStaff, setOriginalStaff] = useState([]);
    const [staff,setStaff] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [searchParam,setSearchParam] = useState('');
  
  const fetchStaffMembers = async() => {
    try {
      const staffMembers = await getAllStaffMembers();
      setStaff(staffMembers);
      setOriginalStaff(staffMembers);
    } catch (error) {
      alert(error)
    }
  } 

  useEffect(() => {
    fetchStaffMembers();
  },[])

  useEffect(() => {
    if (searchParam === '') {
        setStaff([...originalStaff]);
    } else {
        const filteredStaff = originalStaff.filter(s => s.staffid.includes(searchParam));
        setStaff(filteredStaff);
    }
}, [searchParam, originalStaff]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParam === '') {
        setStaff([...originalStaff]);
    } else {
        const filteredStaff = staff.filter(s => s.staffid === searchParam);
        setStaff(filteredStaff);
    }
}

const handleCloseModal = () => {
  setShowModal(false);
  fetchStaffMembers();
};

  return (
    <div className='min-h-screen bg-gray-300'>
      <div className='w-full flex flex-row justify-around items-center h-auto py-8'>
         <div>
          <form action="" onSubmit={handleSubmit}>
          <input onChange={(e) => {setSearchParam(e.target.value)}} type="text" placeholder='Enter Staff Id' className='text-white bg-gray-600 h-10 px-3 w-72 rounded-l-lg'/>
          <button type='submit' className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 transition duration-300 rounded-r-lg">Search</button>
          </form>
          </div>
         
        <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300">Add Staff</button>
      </div>
      <StaffDisplay data={staff}/>
      {showModal && <AddStaffForm onClose={handleCloseModal}/>}
      
    </div>
    
  );
};

export default page
