import React from 'react'
import { School } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
        <School size={"30"} />
        <h1 className="hidden md:block font-extrabold text-2xl">BrightPath</h1>
    </div>
  )
}

export default Navbar