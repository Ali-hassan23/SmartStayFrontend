import React from "react";

const ReservationCard = ({ reservation }) => {
  return (
        <div
        className="w-8/12 relative overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 flex flex-row justify-between"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Reservation ID : {reservation.reservationid}
            </h3>
            <h3 className="text-sm font-bold text-gray-900">
              Room Number : {reservation.roomno}
            </h3>
          </div>
          <div className="mt-4 flex flex-row gap-8">
          <div>
            <h1>Check In Date</h1>
            <p>{reservation.checkindate}</p>
          </div>
          <div>
            <h1>Check Out Date</h1>
            <p>{reservation.checkoutdate}</p>
          </div>
        </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Payment ID : {reservation.paymentid}
          </h3>
          <h3 className="text-sm font-bold text-gray-900">
              Amount : {reservation.amount}
            </h3>
            </div>
          <div className="mt-4">
            <h1>Payment Date</h1>
            <p>{reservation.paymentdate}</p>
          </div>
        </div>
      
    </div>
  );
};

export default ReservationCard;
