import React from 'react'
import Image from "next/image";
// ..

const Accomodation = () => {

  return (
    <div className="flex w-auto flex-col items-center" style={{minHeight : 'calc(100vh - 7rem)'}} >
        <div className='flex flex-col items-center w-auto px-7 md:w-1/2 '>
        <h5 className="text-2xl border-b-2 border-black text-uppercase d-inline-block pt-3 px-3 pb-2 mx-auto mt-0 mt-md-5 mb-6">
                        Accommodation</h5>

           <h2 className='font-semibold uppercase text-3xl md:text-4xl mb-6'>Luxury Rooms</h2>  
           <p className='text-center font-medium '>
           Our hotel rooms offer absolute comfort and a design sensibility inspired by soft, muted colour tones. 
           Whether you choose any one of our suites or opt for a room, 
           you can always be sure of a fantastic sleep to leave you feeling refreshed and revitalized.
            </p> 

        </div>
        <div className='flex w-auto flex-col flex-wrap md:flex-row gap-4 mt-4 items-center md:justify-evenly p-10 ' >
        <Image  src="/standard.jpg" alt="HEHE" className='w-auto h-auto' width={350} height={350}/>
        <Image  src="/deluxe.jpg" alt="HEHE" className='w-auto h-auto' width={350} height={350}/>
        <Image  src="/executive.jpg" alt="HEHE" className='w-auto h-auto' width={350} height={350}/>


            
        </div>
    </div>
  )
}

export default Accomodation
