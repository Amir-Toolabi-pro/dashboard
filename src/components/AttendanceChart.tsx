"use client"

import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function AttendanceChart() {

 const data = [
  {
   name: 'Mon',
   present: 110,
   absent: 40,
  },
  {
   name: 'Tue',
   present: 140,
   absent: 10,
  },
  {
   name: 'Wed',
   present: 147,
   absent: 3,
  },
  {
   name: 'Thr',
   present: 100,
   absent: 50,
  },
  {
   name: 'Fri',
   present: 120,
   absent: 30,
  },
 ];

 return (
  <div className='bg-white rounded-lg h-full p-4' >
   <div className='flex justify-between' >
    <h1>Attendance</h1>
    <Image src="/moreDark.png" alt='' width={20} height={20} />
   </div>
   <ResponsiveContainer width="100%" height="90%">
    <BarChart
     width={500}
     height={300}
     data={data}
     barSize={20}
    >
     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
     <XAxis dataKey="name" axisLine={false} tick={{fill:"#bababa"}} tickLine={false} />
     <YAxis axisLine={false} tick={{fill:"#bababa"}} tickLine={false} />
     <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
     <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
     <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]} />
     <Bar dataKey="absent" fill="#C3EBFA" legendType='circle' radius={[10,10,0,0]} />
    </BarChart>
   </ResponsiveContainer>
  </div>
 )
}

export default AttendanceChart