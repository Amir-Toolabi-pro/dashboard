import React from 'react'

import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'

function AdminPage() {
  return (
    <div className="flex gap-4 p-4 flex-col md:flex-row bg-gray-100">
      <div className='w-full md:w-2/3 flex flex-col gap-8'>
        <div className='w-full flex justify-between gap-4 flex-wrap' >
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className='flex flex-col lg:flex-row gap-4' >
          <div className='w-full h-[350px] lg:w-1/3' >
            <CountChart />
          </div>
          <div className='w-full h-[450px] lg:w-2/3'>
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className='w-full md:w-1/3 flex flex-col gap-8 mb-8'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage