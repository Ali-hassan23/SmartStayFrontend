import React from 'react';
import Link from 'next/link';

const StaffDisplay = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg mr-4 ml-24">
      <table className="w-full min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Staff ID
            </th>
            <th scope="col" className="px-6 py-3">
              Staff Name
            </th>
            
            <th scope="col" className="px-6 py-3">
              Email
            </th>
           
            
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the data array to render rows */}
          {data.map((staff, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700' : 'bg-white dark:bg-gray-800'}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {staff.staffid}                
              </th>
              <td className="px-6 py-4">
                {`${staff.firstname} ${staff.lastname}`}
              </td>
              
              <td className="px-6 py-4">
                {staff.email}
              </td>
              
              
              <td className="px-6 py-4">
                {staff.role}
              </td>
              <td className="px-6 py-4 flex flex-row gap-5">
                <Link href={`/admin/staff/${staff.staffid}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDisplay;
