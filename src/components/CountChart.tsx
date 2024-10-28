"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


function CountChart() {

 const data = [
  {
   name: 'Girls',
   count: 53,
   fill: '#FAE27C',
  },
  {
   name: 'Boys',
   count: 80,
   fill: '#C3EBFA',
  },
  {
   name: 'Total',
   count: 106,
   fill: 'white',
  },
 ];

 return (
  <div className='bg-white rounded-xl w-full h-full p-4' >
   {/* title */}
   <div className='flex justify-between items-center' >
    <h1 className='text-lg font-semibold' >Student</h1>
    <Image src="/moreDark.png" alt='' width={20} height={20} />
   </div>
   {/* chart */}
   <div className='w-full h-[65%] md:h-[90%] relative' >
    <ResponsiveContainer width="100%" >
     <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="100%" barSize={40} data={data}>
      <RadialBar
       background
       dataKey="count"
      />
     </RadialBarChart>
    </ResponsiveContainer>
    <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
   </div>
   {/* bottom */}
   <div className='flex justify-around items-center' >
    <div className='flex flex-col gap-1' >
     <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
     <span className='text-md text-gray-600 font-semibold' >96</span>
     <span className='text-sm text-gray-600'>Boys (63%)</span>
    </div>
    <div className='flex flex-col gap-1' >
     <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
     <span className='text-md text-gray-600 font-semibold' >54</span>
     <span className='text-sm text-gray-600 ' >Girls (37%)</span>
    </div>
   </div>
  </div>
 )
}

export default CountChart