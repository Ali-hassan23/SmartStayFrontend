import Image from "next/image";
import React from "react";

const SingleRoomDisplay = ({ room, index }) => {
  if (!room) {
    return <div>Loading...</div>;
  }

  
  const flexDirectionClass = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
  const paddingDiffers = index % 2 === 0 ? "pr-8" : "pl-8";

  return (
    <div className={`w-full max-w-6xl mx-auto flex ${flexDirectionClass} gap-10`}>
      <Image src="/lobby.jpg" width={500} height={500} className="h-96 w-1/2" />
      <div className={`w-1/2 flex flex-col items-center justify-center gap-4 text-gray-700 ${paddingDiffers}`}>
        <h2 className="text-4xl font-semibold text-gray-800">{room.roomtype}</h2>
        <p className="text-center text-gray-600">
        Escape to our serene double room with a queen-sized bed, modern amenities, and elegant decor—a tranquil haven for couples or solo travelers seeking relaxation
        </p>
        
        <div className="flex flex-row text-center gap-9">
          <div className="text-center">
            <p className="font-semibold text-gray-800">Capacity</p>
            <p className="text-gray-700">{room.capacity}</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-800">Price Per Night</p>
            <p className="text-gray-700">{room.price_per_night}</p>
          </div>
        </div>
        <div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            Reserve Your Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDisplay;
