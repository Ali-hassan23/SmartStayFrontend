"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";


const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const result = await axios.get("http://localhost:5000/payment/allPayments");
        setPayments(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPayments();
  }, []);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPayments = payments.filter(payment =>
    payment.paymentid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg mr-4 mt-8 ml-24 h-screen ">
      <div className="mt-4 mx-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Enter Reservation ID"
          className="border border-gray-800 bg-slate-700 text-white focus:outline-none rounded-lg p-3"
        />
      </div>
      <table className="w-full min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Payment ID</th>
            <th scope="col" className="px-6 py-3">Reservation ID</th>
            <th scope="col" className="px-6 py-3">Payment Date</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Paid</th>
            <th scope="col" className="px-6 py-3">Credit Card NO</th>
            <th scope="col" className="px-6 py-3">Card Holder Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.paymentid} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {payment.paymentid}
              </th>
              <td className="px-6 py-4">{payment.reservationid}</td>
              <td className="px-6 py-4">{moment(payment.paymentdate).format("MMMM DD, YYYY")}</td>
              <td className="px-6 py-4">{payment.amount}</td>
              <td className="px-6 py-4">{payment.ispaid ? 'Paid' : 'Unpaid'}</td>
              <td className="px-6 py-4">{payment.credit_card_number}</td>
              <td className="px-6 py-4">{payment.card_holder_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
