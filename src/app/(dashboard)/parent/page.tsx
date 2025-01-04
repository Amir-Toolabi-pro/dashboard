import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import React from 'react'

function ParentPage() {
  return (
    <div className='flex flex-1 gap-4 p-4 flex-col md:flex-row'>
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full p-4 rounded-md">
          <h1 className='text-xl font-semibold'>Schedule (Amir Toolabi)</h1>
          <BigCalendar/>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8 mb-8">
      <Announcements />
      </div>
    </div>
  )
}

export default ParentPage