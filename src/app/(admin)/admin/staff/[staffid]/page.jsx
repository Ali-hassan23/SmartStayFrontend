'use client'
import SingleStaffDisplay from '@/components/AdminComponents/StaffComponents/SingleStaffDisplay';
import { getStaffById } from '@/lib/AdminPanelFunctions/staffFunctions'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [staff,setStaff] = useState([]);

  // useEffect(() => {

  // })
  const storedToken = localStorage.getItem("token");
    console.log('Retrieved token from storage:', storedToken);
    setToken(storedToken);
  console.log("Printing Params",params)
  const fetchStaff = async () => {
    try {
      console.log("staffId: ", params.staffid)
      const newStaff = await getStaffById(params.staffid)  
      setStaff(newStaff);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    fetchStaff();
  },[params.staffid])
    
  return (
    <div>
      {staff.map((staff,index) => (
        <SingleStaffDisplay key={index} staff={staff}/>
      ))}
      {/* <SingleStaffDisplay staff={staff}/> */}
    </div>
  )
}

export default page
