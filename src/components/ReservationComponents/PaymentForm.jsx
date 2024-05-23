'use client'
import { reservationById } from "@/lib/reservationFunctions";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router"

const PaymentForm = ({ reservationID }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [reservationid, setReservationId] = useState();
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const paymentData = {
      reservationid: reservationID,
      amount: reservation.total_cost,
      credit_card_number: cardNumber,
      card_holder_name: cardHolder,
    };
    
    // console.log(amount, credit_card_number, card_holder_name, reservationid)
    try {
      const response = await axios.post('http://localhost:5000/payment',paymentData)
      console.log(response);
      router.push('/yourReservations');
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReservation = async () => {
    try {
      const response = await reservationById(reservationID);
      setReservation(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Reservation ID here:", reservationID);
    fetchReservation();
    setReservationId(reservationID)
  }, [reservationID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white pt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-12 w-1/2 sm:px-6 lg:px-8 bg-white border shadow-lg hover:scale-105 transition-all transform shadow-slate-500 rounded-xl">
        <div className="mx-auto max-w-lg text-center pb-10">
          <h1 className="text-2xl text-black font-bold sm:text-3xl">Payment</h1>
          <p className="mt-1 text-black">Provide Your Payment Details</p>
        </div>

        <div>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="text-black text-lg font-bold">
              Reservation ID:{" "}
              <span className="font-thin text-gray-700">
                {reservationID}
              </span>
            </div>
            <div className="text-black text-lg font-bold">
              Amount:{" "}
              <span className="font-thin text-gray-700">
                {reservation ? `${reservation.total_cost}$` : "Loading..."}
              </span>
            </div>
          </div>
        </div>

        <form action="#" onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="cardNumber" className="sr-only">
              Credit Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                className="w-full rounded-lg text-black shadow-md focus:outline-none focus:bg-zinc-100 shadow-slate-400 bg-white p-4 pe-12 text-sm"
                placeholder="Enter Credit Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="cardHolder" className="sr-only">
              Card Holder's Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardHolder"
                className="w-full rounded-lg text-black shadow-md focus:outline-none focus:bg-zinc-100 shadow-slate-400 bg-white p-4 pe-12 text-sm"
                placeholder="Enter Card Holder's Name"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-slate-600 hover:scale-105 text-white font-bold py-2 px-4 transition duration-300 rounded-lg"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
