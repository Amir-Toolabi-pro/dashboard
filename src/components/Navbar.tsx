import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4' >
     <div className='hidden md:flex gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 p-2'>
      <Image src='/search.png' alt='' width={14} height={14}/>
      <input className='w-[200px] bg-transparent outline-none' type="text" placeholder='Search...' />
     </div>
     <div className='flex items-center gap-6 justify-end w-full'>
      <div className="flex justify-center items-center rounded-full w-7 h-7 cursor-pointer">
       <Image src='/message.png' width={20} height={20} alt='' />
      </div>
      <div className="flex relative justify-center items-center rounded-full w-7 h-7 cursor-pointer">
       <Image src='/announcement.png' width={20} height={20} alt='' />
       <div className='w-5 h-5 text-xs flex justify-center items-center text-white rounded-full absolute -top-3 -right-3 bg-purple-500 '>1</div>
      </div>
      <div className='flex flex-col'>
       <span className='text-xs leading-3 font-medium' >
        Amir Toolabi
       </span>
       <span className='text-[10px] text-gray-500 text-right' >
        Admin
       </span>
      </div>
      <Image src='/avatar.png' className='rounded-full' width={36} height={36} alt='' />
     </div>
    </div>
  )
}

export default Navbar