import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleRoomDisplay = ({ room, index, image }) => {
  if (!room) {
    return <div>Loading...</div>;
  }

  const flexDirectionClass = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
  const paddingDiffers = index % 2 === 0 ? "pr-8" : "pl-8";

  return (
    <div className={`md:w-full w-auto max-w-6xl mx-auto px-4 pt-8 md:pt-0 items-center flex md:${flexDirectionClass} flex-col md:gap-10`}>
      <Image src={image} width={500} height={500} className="h-52 md:h-96 md:w-1/2"/>
      <div className={`w-auto flex flex-col items-center justify-center gap-4 text-gray-700 md:${paddingDiffers}`}>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">{room.typename}</h2>
        <p className="text-center text-gray-600">
          {room.description}
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
          <Link href={`/rooms/${room.roomtypeid}`} className="bg-gray-800  hover:bg-gray-700 text-white w-auto font-semibold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            Reserve Your Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDisplay;
