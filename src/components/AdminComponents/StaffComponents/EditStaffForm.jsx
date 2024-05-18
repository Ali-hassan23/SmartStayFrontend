'use client'
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import moment from "moment";
import axios from "axios";

const EditStaffForm = ({ staff, onClose }) => {
  const [storedToken,setStoredToken] = useState('' )
  useEffect(() => {
    const token = localStorage.getItem("token");
    setStoredToken(token);
  })
  
  const [formValues, setFormValues] = useState({
    firstname: staff.firstname,
    lastname: staff.lastname,
    email: staff.email,
    contact: staff.contact,
    salary: staff.salary,
    role: staff.role,
  });

  const [error,setError] = useState('')
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const formatDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.put(`http://localhost:5000/staff/${staff.staffid}`,formValues,{
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${storedToken}`,
            },
          })
          window.location.href = '/admin/staff';
        //   console.log(response);
    } catch (error) {
        console.log(error);
        if (error.response) {
            setError(error.response.data)
        } else {
            setError("Failed To Edit Staff Member");
        }
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center h-screen"
    >
      <button className="place-self-end text-white" onClick={onClose}>
        <X size={40} />
      </button>
      <section className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8">
                <h1 className="text-3xl text-gray-300 font-bold pb-4">
                  {staff.firstname} {staff.lastname}
                </h1>
                <h1 className="text-xl text-gray-400 font-bold">
                  {staff.staffid}
                </h1>
                <h1 className="text-xl text-gray-400 font-bold ">
                  {formatDate(staff.dob)}{" "}
                </h1>
              </div>
            </div>

            <div className="rounded-lg bg-gray-600 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only text-black" htmlFor="firstname">
                      First Name
                    </label>
                    <input
                      className="w-full rounded-lg text-white bg-gray-800 p-3 pe-12 text-sm shadow-sm"
                      placeholder="First Name"
                      type="text"
                      id="firstname"
                      value={formValues.firstname}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="lastname">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded-lg text-white bg-gray-800 p-3 pe-12 text-sm shadow-sm"
                      placeholder="Last Name"
                      type="tel"
                      id="lastname"
                      value={formValues.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg text-white bg-gray-800 p-3 pe-12 text-sm shadow-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg text-white bg-gray-800 p-3 pe-12 text-sm shadow-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="contact"
                    value={formValues.contact}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="salary">
                      Salary
                    </label>
                    <input
                      className="w-full rounded-lg text-white bg-gray-800 p-3 pe-12 text-sm shadow-sm"
                      placeholder="Salary"
                      type="text"
                      id="salary"
                      value={formValues.salary}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="role">
                      Role
                    </label>
                    <input
                      className="w-full rounded-lg text-white bg-gray-800 p-3 pe-12 text-sm shadow-sm"
                      placeholder="Role"
                      type="text"
                      id="role"
                      value={formValues.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-4">
                {error && <p className='text-sm pb-3 text-red-500'>{error}</p>}
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditStaffForm;
