"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,password);
    try {
      const response = await axios.post("http://localhost:5000/admin/login",{username,password},{
        headers: { "Content-Type": "application/json" },
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-600">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-700 border border-gray-700 rounded-xl">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-gray-400 font-bold sm:text-3xl">Hello Admin</h1>

          <p className="mt-4 text-white">
            Provide Your Login Credentials To Move Forward
          </p>
        </div>

        <form action="#" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg text-white bg-gray-800 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Username"
                onChange={(e) => {setUserName(e.target.value)}}
              />

              
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg text-white bg-gray-800 p-4 pe-12 text-sm border-0"
                placeholder="Enter password"
                onChange={(e) => {setPassword(e.target.value)}}
              />

              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 transition duration-300 rounded-lg"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
