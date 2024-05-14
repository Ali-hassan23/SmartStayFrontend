import axios from "axios";
import React from "react";

const QueryCard = ({ query,onMarkAsRead }) => {

  const handleClick = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/contact/${query.id}`,{
        headers: { "Content-Type": "application/json" },
      })
      onMarkAsRead();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <article className="flex flex-col rounded-lg bg-gray-400 w-72 h-96 p-4 shadow-sm transition hover:shadow-lg sm:p-6 justify-between">
      <div>
          <h3 className="mt-0.5 text-xl font-bold text-gray-900">
            {query.name}
          </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
          {query.message}
        </p>
        </div>
        <div className="flex flex-col gap-2">
        <a
          href={`mailto:${query.email}`}
          className="group inline-flex items-center gap-1 text-md font-medium text-blue-600"
        >
          Email 
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
        <a
          href={`tel:${query.phoneno}`}
          className="group inline-flex items-center gap-1 text-md font-medium text-blue-600"
        >
          Phone
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
        <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300">Mark As Read</button>
        </div>
        
      </article>
    </div>
  );
};

export default QueryCard;
