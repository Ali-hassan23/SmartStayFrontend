'use client'
import StaffDisplay from '@/components/AdminComponents/StaffDisplay';
import { getAllStaffMembers } from '@/lib/AdminPanelFunctions/staffFunctions';
import React, { useEffect, useState } from "react";

const page = () => {
    const [staff,setStaff] = useState([]);
  
  const fetchStaffMembers = async() => {
    try {
      const staffMembers = await getAllStaffMembers();
      setStaff(staffMembers);
    } catch (error) {
      alert(error)
    }
  } 

  useEffect(() => {
    fetchStaffMembers();
  },[])

  return (
    <table className="staff-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Salary</th>
          <th>Role</th>
          <th>Actions</th> {/* New column for actions */}
        </tr>
      </thead>
      <tbody>
        {staff.map((staff, index) => (
          <tr key={index}>
            <td>{staff.firstname}</td>
            <td>{staff.lastname}</td>
            <td>{staff.contact}</td>
            <td>{staff.email}</td>
            <td>{staff.dob}</td>
            <td>${staff.salary}</td>
            <td>{staff.role}</td>
            <td>
              {/* Edit button */}
              <button onClick={() => onEdit(staff)}>Edit</button>
              {/* Delete button */}
              <button onClick={() => onDelete(staff)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default page
