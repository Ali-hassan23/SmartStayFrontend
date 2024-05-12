"use clinet";
import React, { useState } from "react";
import moment from "moment";
import DeleteWarningModal from "../DeleteWarningModal";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import AddStaffForm from "./AddStaffForm";
import EditStaffForm from "./EditStaffForm";

const SingleStaffDisplay = ({ staff }) => {
  const [userExists, setUserExists] = useState(true);
  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY"); // 'February 19, 1980'
  };
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleYesClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/staff/${staff.staffid}`
      );
      console.log(response);
      setUserExists(false);
    } catch (error) {
      console.log(error);
    }
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      {userExists ? (
        <>
          <div className="flow-root rounded-lg py-7 px-4">
            <dl className="-my-3 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium ">ID Number</dt>
                <dd className=" sm:col-span-2">{staff.staffid}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Name</dt>
                <dd className="sm:col-span-2">
                  {staff.firstname} {staff.lastname}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium ">Contact Number</dt>
                <dd className=" sm:col-span-2">{staff.staffid}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium ">Email Address</dt>
                <dd className="sm:col-span-2">{staff.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium ">Date Of Birth</dt>
                <dd className="sm:col-span-2">{formatDate(staff.dob)}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium">Role</dt>
                <dd className="sm:col-span-2">{staff.role}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 odd:bg-gray-600 odd:text-white sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium ">Salary</dt>
                <dd className="sm:col-span-2">${staff.salary}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-row gap-4">
            <button onClick={() => {setShowEditModal(true)}} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300">
              Edit
            </button>
            <div>
              {showEditModal && (
                <EditStaffForm staff={staff} onClose={() => setShowEditModal(false)}/>
              )}
              
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Delete
            </button>
          </div>
          {showModal && (
            <DeleteWarningModal
              onClose={() => setShowModal(false)}
              onYes={() => handleYesClick()}
            />
          )}
        </>
      ) : (
        <div className="flex flex-col h-screen w-screen items-center justify-center gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Staff Member Does Not Exist Anymore</h1>
          <Link className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300" href={'/admin/staff'}>Back</Link>
        </div>
      )}
    </div>
  );
};

export default SingleStaffDisplay;
