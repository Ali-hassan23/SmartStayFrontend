import React from 'react'
import Image from "next/image";


const Services = () => {
  return (
<div className='flex flex-col items-center w-auto mt-7 px-10'style={{minHeight : "100vh"}}>
        <div className='w-auto items-center md:w-1/3'>
            <h2 className="text-4xl font-semibold text-center uppercase pt-3 px-3 pb-2 mx-auto mt-0 mt-md-5 mb-10">AMENITIES</h2>

        </div>
        
        <div className='w-auto px-7 md:w-full max-w-6xl mx-auto mb-6 flex flex-col-reverse md:flex-row-reverse gap-10 items-center justify-center border-2 pt-9 pb-9 rounded-lg border-gray-300 transform hover:scale-105 transition-transform duration-300'>
      <Image src="/gym.jpg" width={400} height={400}  />
      <div className='w-auto md:w-1/3 flex flex-col items-center gap-4 text-gray-700'>
        <p className='uppercase text-base border-b-2 border-black p-2'>AMENITIES</p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">HEALTH CLUB</h2>
        <p className="text-center text-xl font-normal text-black">
        From intense cardiovascular workouts to mild and restorative routines, 
        we have everything to keep you pumped up on the go.        </p>
        
       
    
    </div>
        </div>
        <div className='w-auto px-7 md:w-full max-w-6xl mx-auto mb-6 flex flex-col-reverse md:flex-row gap-10 items-center justify-center border-2 pt-9 pb-9 rounded-lg border-gray-300 transform hover:scale-105 transition-transform duration-300'>
      <Image src="/spa.jpg" width={400} height={400}  />
      <div className='w-auto md:w-1/3 flex flex-col items-center gap-4 text-gray-700'>
        <p className='uppercase text-base border-b-2 border-black p-2'>AMENITIES</p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">WELLNESS & SPA</h2>
        <p className="text-center text-xl font-normal text-black">
        From the gentle Thai Massage to the powerful Deep Tissue Massage, 
        there is something for everyone.


</p>
        
       
    
    </div>
        </div>
        
        

    </div> 
     )
}

export default Services
