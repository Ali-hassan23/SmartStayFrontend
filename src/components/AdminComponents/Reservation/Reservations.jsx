"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/reservation/active"
        );
        setReservations(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  useEffect(() => {
    const filteredResults = reservations.filter((reservation) =>
      reservation.reservationid
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredReservations(filteredResults);
  }, [searchQuery, reservations]);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg mt-8 ml-20">
      <h1 className="text-gray-300 text-3xl py-3 text-center">Reservations</h1>
      <div className="mt-4 mx-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Enter Reservation ID"
          className="border border-gray-800 bg-slate-700 text-white focus:outline-none rounded-lg p-3"
        />
      </div>
      <table className="w-full min-w-max text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400 mt-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Reservation ID
            </th>
            <th scope="col" className="px-6 py-3">
              Customer ID
            </th>
            <th scope="col" className="px-6 py-3">
              Room No
            </th>
            <th scope="col" className="px-6 py-3">
              Check-In-Date
            </th>
            <th scope="col" className="px-6 py-3">
              Check-Out-Date
            </th>
            <th scope="col" className="px-6 py-3">
              Total Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredReservations.map((reservation) => (
            <tr
              key={reservation.reservationid}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {reservation.reservationid}
              </th>
              <td className="px-6 py-4">{reservation.customerid}</td>
              <td className="px-6 py-4">{reservation.roomno}</td>
              <td className="px-6 py-4">
                {moment(reservation.checkindate).format("MMMM DD, YYYY")}
              </td>
              <td className="px-6 py-4">
                {moment(reservation.checkoutdate).format("MMMM DD, YYYY")}
              </td>
              <td className="px-4 py-4">${reservation.total_cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
