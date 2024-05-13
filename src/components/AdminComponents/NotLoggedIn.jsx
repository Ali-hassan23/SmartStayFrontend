import React from 'react'
import Link from 'next/link'

const NotLoggedIn = () => {
  return (
    <div className='h-screen bg-gray-500 flex justify-center items-center'>
      <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center px-20 py-16  rounded'>
        <h1 className='text-gray-400 font-bold text-3xl'>Please Login First</h1>
        <Link href={'/admin'} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300">Login</Link>
      </div>
    </div>
  )
}

export default NotLoggedIn
