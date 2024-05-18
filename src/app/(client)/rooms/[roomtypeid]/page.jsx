import ReservationForm from '@/components/ReservationComponents/ReservationForm';
import React from 'react'

const page = ({ params }) => {
  return (
    <div>
      <ReservationForm id={params.roomtypeid}/>
      </div>
  )
}

export default page
