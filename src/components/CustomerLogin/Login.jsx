"use client";
import React, { useState } from "react";
// import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Login = ({ onSignupClick, onLoginSuccessfull }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
    setError('')
    try {
      const response = await axios.post("http://localhost:5000/auth/login",{email,password},{
        headers: { 
          "Content-Type": "application/json"
        },
      })
      const { accessToken } = response.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      console.log(accessToken);

    // Store the token in local storage
    localStorage.setItem("customerToken", accessToken);
    console.log(localStorage.getItem("customerToken"))
    console.log(response);
    onLoginSuccessfull();
      // window.location.href = '/admin/staff';

    } catch (error) {
      if (error.response && (error.response.status === 400 || error.response.status === 401)) {
        setError('Invalid email or password.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white border shadow-lg hover:scale-105 transition-all transform shadow-slate-500 rounded-xl">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-black font-bold sm:text-3xl">LOGIN</h1>

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
                className="w-full rounded-lg text-black shadow-md focus:outline-none focus:bg-zinc-100 shadow-slate-400 bg-white p-4 pe-12 text-sm"
                placeholder="Enter email"
                onChange={(e) => {setemail(e.target.value)}}
                required
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
                className="w-full rounded-lg text-black shadow-md shadow-slate-400 focus:bg-zinc-100 focus:outline-none bg-white p-4 pe-12 text-sm"
                placeholder="Enter password"
                onChange={(e) => {setPassword(e.target.value)}}
                required
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
          {error && <div className="mt-4 text-red-500">{error}</div>}
          <div className="flex flex-col gap-4 items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-slate-600 hover:scale-105 text-white font-bold py-2 px-4 transition duration-300 rounded-lg"
            >
              Log in
            </button>
            <p className='text-gray-500'>Don't have an account ? <button type="button" onClick={onSignupClick} className="hover:underline cursor-pointer">Register</button></p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
