'use client'
import React, { useState } from 'react'
import Image from "next/image";
import axios from 'axios';


const ContactUs = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneno,setPhoneno] = useState('');
  const [message,setMessage] = useState('');
  const [is_read,setIs_read] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response  = await axios.post('http://localhost:5000/contact',{name,email,phoneno,message,is_read},{
        headers: { "Content-Type": "application/json" },
      })
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
    // console.log(name,email,phoneno,message);
  }

  return (
<div className="flex w-auto flex-col items-center" style={{minHeight : 'calc(100vh - 7rem)'}} >
    <div className='flex flex-col items-center w-auto px-7 md:w-1/2 mt-36'>
    <h5 className="text-3xl  border-b-2 border-black text-uppercase d-inline-block pt-3 px-3 pb-2 mx-auto mt-0 mt-md-5 mb-6">
    CONTACT US</h5>

       <h2 className='font-semibold uppercase text-3xl md:text-4xl mb-6'>Smart stay</h2>  
       <p className='text-center font-medium '>
        T: +92 (42) 111 505 505, 3636 0210 / F: +92 (42) 3636 2760, 3636 4362 <br />

        Website: SmartStay.com / FB: www.facebook.com/SmartStay/ <br />

        IG: www.instagram.com/SmartStay</p> 

    </div>

  <div className="w-full sm:w-auto md:w-1/2  px-10 py-16 sm:px-4 lg:px-8">
    <div className="w-full grid gap-x-16 gap-y-8">


      <div className=" rounded-lg bg-white p-8 shadow-lg shadow-slate-500 hover:scale-105 transition-all transform lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 bg-slate-200 p-3 text-sm text-gray-900"
              placeholder="Name"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 bg-slate-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg bg-slate-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phoneno"
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </div>
          </div>


          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 bg-slate-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>   )
}

export default ContactUs
