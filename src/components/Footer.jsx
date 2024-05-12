import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (


<footer className="bg-white">
    
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="md:flex md:justify-between">
            
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image src="/smartlogo.jpg" className="h-20 me-3 bg-blend-multiply" alt="FlowBite Logo" width={100} height={100} />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">SmartStay</span>
              </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">about</h2>
                  <ul className="text-black dark:text-black font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">Contact Us</a>
                      </li>
                      <li>
                          <a href="/" className="hover:underline">Latest News</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Follow us</h2>
                  <ul className="text-black dark:text-black font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="/" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Legal</h2>
                  <ul className="text-black dark:text-black font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-black sm:text-center dark:text-black">© 2023 <a href="h/" className="hover:underline">SmartStay™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

 )
}

export default Footer
