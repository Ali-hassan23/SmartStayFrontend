import Link from "next/link";
import React from "react";

const ContactSuccessfull = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl font-bold">Enquiry Sent Successfully</h1>
      <Link
        href={"/"}
        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto transition duration-300 ease-in-out transform hover:scale-105"
      >
        Move Forward
      </Link>
    </div>
  );
};

export default ContactSuccessfull;
