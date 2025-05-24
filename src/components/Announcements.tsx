import React from 'react'

const announData = [
 {
  id: 1,
  title: "Lorem ipsum color sit",
  date: "2025-01-01",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, facilis eum labore sequi delectus...",
 },
 {
  id: 2,
  title: "Lorem ipsum color sit",
  date: "2025-01-01",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, facilis eum labore sequi delectus...",
 },
 {
  id: 3,
  title: "Lorem ipsum color sit",
  date: "2025-01-01",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, facilis eum labore sequi delectus...",
 },
]

function Announcements() {
 return (
  <div>
   <div className="flex justify-between items-center">
    <h1 className='font-semibold text-xl my-4 '>Events</h1>
    <span className="text-gray-400 text-xs">View All</span>
   </div>
   <div className="flex flex-col gap-4">
    {announData.map(data => (
     <div key={data.id} className="p-3 odd:bg-lamaPurpleLight even:bg-lamaYellowLight">
      <div className="flex justify-between items-center">
       <h1 className='font-semibold'>{data.title}</h1>
       <span className="text-gray-400 text-xs bg-white">{data.date}</span>
      </div>
      <p className="mt-2 text-gray-400 text-sm">{data.description}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Announcements