import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='flex sm:px-10 px-1 justify-between border py-2 shadow-xl'>
        <Link to='/' className='text-xl font-bold'>Comfort<span className='bg-green-500 p-1 text-white font-bold'>Zone</span></Link>
        <Link to='/pasttemperature'><span className='bg-[#374151] hover:bg-[#1f2937] text-white px-2 rounded-md py-1'>Past Temperature</span></Link>
      </ul>
    </div>
  )
}

export default Navbar
