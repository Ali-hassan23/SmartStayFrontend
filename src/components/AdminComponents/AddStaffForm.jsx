import React, { useRef, useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react'

const AddStaffForm = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if(modalRef.current === e.target){
      onClose();
    }
  }

const [staffid,setStaffid] = useState('');
const [firstname,setFirstname] = useState('');
const [lastname,setLastname] = useState('');
const [email,setEmail] = useState('');
const [contact,setContact] = useState('');
const [salary,setSalary] = useState('');
const [dob,setDob] = useState('1990-08-08');
const [role,setRole] = useState('');

const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ staffid, firstname, lastname, contact, email, dob, salary, role });
    try {
      const response = await axios.post("http://localhost:5000/staff",{ staffid,firstname,lastname,contact,email,dob,salary,role },{
        headers: { "Content-Type": "application/json" },
      })
      console.log(response);
    } catch (error) {
      console.error(error);
        if (error.response) {
            // Display backend error message
            setError(error.response.data);
        } else {
            // Generic error message if no response from backend
            setError("Failed to submit form. Please check your network connection.");
        }
    }
    onClose();
  };

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center h-screen">
      <div>
      <button className='place-self-end text-white' onClick={onClose}><X size={40}/></button>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-800 text-white p-12 rounded-xl bg-gray-700">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              onChange={(e) => {setFirstname(e.target.value)}}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              onChange={(e) => {setLastname(e.target.value)}}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text:white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="staffId"
            id="staff_id"
            onChange={(e) => {setStaffid(e.target.value)}}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text:white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="staff_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Staff Id
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"         
            name="email"
            id="floating_email"
            onChange={(e) => {setEmail(e.target.value)}}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text:white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            
          />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phoneNumber"
            id="floating_phone"
            onChange={(e) => {setContact(e.target.value)}}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text:white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          {/* {errors.email && <span>{errors.email.message}</span>} */}
          <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="salary"
              id="floating_salary"
              onChange={(e) => {setSalary(e.target.value)}}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text:white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="floating_salary" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Salary
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="role"
              id="staff_role"
              onChange={(e) => {setRole(e.target.value)}}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text:white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="staff_role" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Role
            </label>
          </div>
        </div>
        <div className="error-message">
    {error && <p className='text-sm pb-3 text-red-500'>{error}</p>}
</div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddStaffForm;
