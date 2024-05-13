import React from 'react'
import Image from "next/image";


const Facilities = () => {
  return (
    <div className='flex flex-col items-center w-auto mt-7 px-10'style={{minHeight : "100vh"}}>
        <div className='w-auto items-center md:w-1/3'>
            <h2 className="text-4xl font-semibold text-center uppercase pt-3 px-3 pb-2 mx-auto mt-0 mt-md-5 mb-10">Facilities</h2>

        </div>
        
        <div className='w-auto px-7 md:w-full max-w-6xl mx-auto mb-6 flex flex-col-reverse md:flex-row-reverse gap-10 items-center justify-center border-2 pt-9 pb-9 rounded-lg border-gray-300 transform hover:scale-105 transition-transform duration-300'>
      <Image src="/business.jpg" width={400} height={400} alt='image' className='w-auto h-auto'  />
      <div className='w-auto md:w-1/3 flex flex-col items-center gap-4 text-gray-700'>
        <p className='uppercase text-base border-b-2 border-black p-2'>business center</p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">Impeccable Service</h2>
        <p className="text-center text-xl font-normal text-black">
        Explore our meeting venues with a wide variety of well-equipped
         conference halls and meeting rooms, perfect for all your events.        </p>
        
       
    
    </div>
        </div>
        <div className='w-auto px-7 md:w-full max-w-6xl mx-auto mb-6 flex flex-col-reverse md:flex-row gap-10 items-center justify-center border-2 pt-9 pb-9 rounded-lg border-gray-300 transform hover:scale-105 transition-transform duration-300'>
      <Image src="/spa.jpg" width={350} height={350} alt='image' className='w-auto h-auto' />
      <div className='w-auto md:w-1/3 flex flex-col items-center gap-4 text-gray-700'>
        <p className='uppercase text-base border-b-2 border-black p-2'>Spa & wellness</p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">Relax & Recover</h2>
        <p className="text-center text-xl font-normal text-black">
        Explore our meeting venues with a wide variety of well-equipped
         conference halls and meeting rooms, perfect for all your events.        </p>
        
       
    
    </div>
        </div>
        
        

    </div>
  )
}

export default Facilities
