'use client'
import SingleRoomDisplay from '@/components/RoomComponents/SingleRoomDisplay';
import { getDistinctRooms } from '@/lib/getDistinctRooms';
import React, { useEffect, useState } from "react";

const page = () => {
  const [distinctRooms, setDistinctRooms] = useState([]);

  const fetchDistinctRooms = async () => {
    try {
      const roomsData = await getDistinctRooms();
      setDistinctRooms(roomsData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchDistinctRooms();
  }, []);

  const imageUrls = [
    "/rooms/stand.jpg",
    "/rooms/delux.jpg",
    "/rooms/executive.jpg",
    "/rooms/business.jpg",
    "/rooms/presedential.jpg",
  ];

  return (
    <div className='flex flex-col pt-36'>
      {distinctRooms.map((room, index) => {
        return (
          <SingleRoomDisplay key={index} room={room} index={index} image={imageUrls[index]} />
        );
      })}
    </div>
  );
}

export default page;
