"use client";
import React, { useEffect, useState } from "react";
import { availableRoomNumber, singleRoomOfType } from "@/lib/getDistinctRooms";
import axios from "axios";

const ReservationForm = ({ id, onReservationComplete }) => {
  const [roomType, setRoomType] = useState(null);
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [roomNumber, setRoomNumber] = useState(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  // Getting today's and next day's date in the required format
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Month is zero-indexed, so add 1
  let year = currentDate.getFullYear();
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  let todayDate = `${year}-${month}-${day}`;
  let nextDate = `${year}-${month}-${day + 1}`;

  const fetchRoomTypeData = async () => {
    try {
      const roomData = await singleRoomOfType(id);
      setRoomType(roomData);
    } catch (error) {
      console.error("Error fetching room type data:", error);
    }
  };

  const fetchRoomNumber = async () => {
    try {
      const roomNo = await availableRoomNumber(id);
      setRoomNumber(roomNo.roomno);
    } catch (error) {
      console.error("Error fetching room number:", error);
    }
  };

  const calculateTotal = () => {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);

    const differenceInMs = checkout - checkin;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.ceil(differenceInMs / millisecondsInDay);

    const totalBill = differenceInDays * roomType.price_per_night;
    if (totalBill <= 0) {
      setError("Please select valid dates");
    } else {
      setError("");
    }
    setTotal(totalBill);
  };

  useEffect(() => {
    if (id) {
      fetchRoomTypeData();
      fetchRoomNumber();
    }
  }, [id]);

  useEffect(() => {
    if (checkinDate && checkoutDate) {
      calculateTotal();
    }
  }, [checkinDate, checkoutDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/reservation/makeReservation", {
        checkinDate,
        checkoutDate,
        roomNumber,
        total
      });
      console.log(response.data);
      const { reservationID } = response.data;
      onReservationComplete(reservationID);
    } catch (error) {
      console.error("Error making reservation:", error);
    }
  };

  return (
    <>
      {roomType ? (
        <div className="w-full flex justify-center items-center">
          <form
            className="px-7 h-screen w-full md:w-1/2 flex pt-20 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div
              className="grid gap-6 shadow-md w-full shadow-slate-400 hover:scale-105 transition-all transform rounded-xl p-6 relative"
              id="form"
            >
              <h2 className="text-black text-3xl text-center font-bold">
                Reservation
              </h2>
              <div className="grid gap-2 w-full">
                <div className="flex md:flex-row flex-col justify-between">
                  <div className="text-black text-lg font-bold">
                    Room Type:{" "}
                    <span className="font-thin text-gray-700">
                      {roomType.typename}
                    </span>
                  </div>
                  <div className="text-black text-lg font-bold">
                    Room Number:{" "}
                    <span className="font-thin text-gray-700">
                      {roomNumber || "Loading..."}
                    </span>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between">
                  <div className="text-black text-lg font-bold">
                    Price (Per Night):{" "}
                    <span className="font-thin text-gray-700">
                      {roomType.price_per_night}$
                    </span>
                  </div>
                  <div className="text-black text-lg font-bold">
                    Total: <span className="font-thin text-gray-700">{total}.00$</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 w-full">
                <label
                  className="text-black text-lg font-semibold"
                  htmlFor="checkinDate"
                >
                  Check-in Date
                </label>
                <input
                  id="checkinDate"
                  className="capitalize shadow-md p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black relative z-10"
                  type="date"
                  value={checkinDate}
                  onChange={(e) => setCheckinDate(e.target.value)}
                  min={todayDate}
                  required
                />
                <label
                  className="text-black text-lg font-semibold"
                  htmlFor="checkoutDate"
                >
                  Check-out Date
                </label>
                <input
                  id="checkoutDate"
                  className="capitalize shadow-md p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-slate-400 rounded-xl placeholder:text-black relative z-10"
                  type="date"
                  value={checkoutDate}
                  onChange={(e) => setCheckoutDate(e.target.value)}
                  min={checkinDate}
                  required
                  placeholder={nextDate}
                />
              </div>
              {error && <p className="text-sm pb-3 text-red-500">{error}</p>}
              <button
                className="outline-none glass shadow-2xl rounded-xl w-full p-3 bg-black text-white hover:bg-slate-600 hover:border-solid font-bold relative z-10"
                type="submit"
              >
                Make Reservation
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="pt-40">Loading...</div>
      )}
    </>
  );
};

export default ReservationForm;
