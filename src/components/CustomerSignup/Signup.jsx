'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Signup = () => {

  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        firstName,
        lastName,
        email,
        dateOfBirth,
        phone,
        address,
        password,
        confirmPassword
      };
        console.log(formData);
        router.push('/login');

      //  try {
      //    const response  = await axios.post('http://localhost:5000/signup',formData,{
      //      headers: { "Content-Type": "application/json" },
      //    })

  //     } catch (error) {
  //        console.log(error);
  //      }
   };

  return (
    <div>
      <form className="px-7 h-screen w-auto pt-20 grid justify-center items-center" onSubmit={handleSubmit}>

        <div className="grid gap-6 shadow-md w-auto shadow-slate-400 hover:scale-105 transition-all transform rounded-xl p-6" id="form">
        <h2 className='text-black text-3xl text-center font-bold '>Sign Up</h2>

          <div className="w-full flex gap-3">
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="grid gap-6 w-full">
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
          </div>
          <div className="flex gap-3">
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="flex gap-3">
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button className="outline-none glass shadow-2xl rounded-xl w-full p-3 bg-black text-white hover:bg-slate-600 hover:border-solid font-bold" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
