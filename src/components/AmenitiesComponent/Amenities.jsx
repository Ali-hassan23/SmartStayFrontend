import React from 'react'
import Image from "next/image";

const Amenities = () => {
  return (
    <div className="flex w-auto flex-col items-center" style={{minHeight : 'calc(100vh - 7rem)'}} >
    <div className='flex flex-col items-center w-auto px-7 md:w-1/2 mt-36'>
    <h5 className="text-2xl border-b-2 border-black text-uppercase d-inline-block pt-3 px-3 pb-2 mx-auto mt-0 mt-md-5 mb-6">
    ENJOY OUR SERVICES</h5>

       <h2 className='font-semibold uppercase text-3xl md:text-4xl mb-6'>Smart stay</h2>  
       <p className='text-center font-medium '>
       We offer an array of services and facilities for our valued guests to ensure a relaxed and comfortable stay. 
       Whether you're in the mood for a soothing massage, a quick swim or sauna, we have it all. </p> 

    </div>
    <div className='flex w-auto flex-col flex-wrap md:flex-row gap-4 mt-4 items-center md:justify-evenly p-10 ' >
    <Image className=' aspect-square'  src="/gym.jpg" alt="HEHE" width={400} height={400}/>
    <Image className=' aspect-square'  src="/pool.jpg" alt="HEHE" width={400} height={500}/>
    <Image className=' aspect-square'  src="/spa.jpg" alt="HEHE" width={400} height={400}/>

      
    </div>
    
</div> 

)
}

export default Amenities
