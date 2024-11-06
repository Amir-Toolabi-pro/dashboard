import React from 'react'
import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'

function StudentPage() {
  return (
    <div className='flex gap-4 p-4 flex-col md:flex-row'>
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full p-4 bg-white rounded-md">
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <BigCalendar/>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8 mb-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default StudentPage