'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import DatePicker from "react-datepicker";
import Link from 'next/link';



const Signup = () => {

  const router = useRouter();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        firstname,
        lastname,
        email,
        dob,
        phone,
        address,
        password,
      };
        console.log(formData);
        router.push('/login');

       try {
         const response  = await axios.post('http://localhost:5000/auth/signup',formData,{
           headers: { "Content-Type": "application/json" },
         })
         console.log(response);
      } catch (error) {
         console.log(error);
       }
   };

  return (
    <div>
      <form className="px-7 h-screen w-auto grid justify-center items-center" onSubmit={handleSubmit}>

        <div className="grid gap-4 shadow-md w-auto shadow-slate-400 hover:scale-105 transition-all transform rounded-xl p-6" id="form">
        <h2 className='text-black text-3xl text-center font-bold '>Sign Up</h2>

          <div className="w-full flex gap-3">
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="grid gap-6 w-full">
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date Of Birth" required />
          </div>
          <div className="flex gap-3">
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="flex gap-3">
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input className="shadow-md text-sm p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-gray-500" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button className="outline-none glass shadow-lg rounded-xl w-full p-3 bg-black text-white hover:bg-slate-600 hover:border-solid font-bold" type="submit">Submit</button>
          <p className='text-gray-500'>Already have an account ? <Link href={'/login'} className='hover:underline'>Log in</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
