"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/calendar.css'

type ValuePice = Date | null;
type Value = ValuePice | [ValuePice, ValuePice]

const events = [
 {
  id: 1,
  title: "Lorem ipsum color",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
 },
 {
  id: 2,
  title: "Lorem ipsum color",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
 },
 {
  id: 3,
  title: "Lorem ipsum color",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
 },
]

function EventCalendar() {
 const [value, setValue] = useState<Value>(new Date())
 return (
  <div>
   <Calendar onChange={setValue} value={value} />
   <div className="flex justify-between items-center">
    <h1 className='font-semibold text-xl my-4 '>Events</h1>
    <Image src="/moreDark.png" alt='' width={20} height={20} />
   </div>
   <div className="flex flex-col gap-4">
    {events.map(ev => (
     <div className='rounded-md p-5 border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple ' key={ev.id} >
      <div className="flex justify-between items-center ">
       <h1 className='text-gray-600 font-semibold'>{ev.title}</h1>
       <span className='text-gray-300 text-xs' >{ev.time}</span>
      </div>
      <p className='mt-2 text-gray-400 text-sm'>{ev.description}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default EventCalendar