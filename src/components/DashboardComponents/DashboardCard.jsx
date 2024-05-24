import React from "react";
import CountUp from "react-countup";

const DashboardCard = ({ icon, title, count }) => (
  <div className="bg-gray-300 p-4 rounded-lg shadow-md w-56 ">
    <div className="flex w-full items-center justify-center mb-4">{icon}</div>
    <div className="text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h3 className="text-lg">
        <CountUp end={parseInt(count)} duration={2.5} />
      </h3>
    </div>
  </div>
);

export default DashboardCard;
