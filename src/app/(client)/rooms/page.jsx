'use client'
import SingleRoomDisplay from '@/components/RoomComponents/SingleRoomDisplay';
import { getDistinctRooms } from '@/lib/getDistinctRooms'
import React, { useEffect, useState } from "react";

const page = () => {
  const [distintRooms,setDistinctRooms] = useState([]);
  
  const fetchDistinctRooms = async() => {
    try {
      const roomsData = await getDistinctRooms();
      setDistinctRooms(roomsData);
    } catch (error) {
      alert(error)
    }
  } 

  useEffect(() => {
    fetchDistinctRooms();
  },[])

  return (
    <div className='flex flex-col'>
      {distintRooms.map((room, index) => (
        
         <SingleRoomDisplay key={index} room={room} index={index} />
         
      ))}
      {/* <SingleRoomDisplay room={distintRooms[0]} /> */}
    </div>
  )
}

export default page
