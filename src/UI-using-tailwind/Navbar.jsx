import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
        <h4 className='bg-black text-white rounded-full py-3 px-5 uppercase'>Target Audience</h4>
        <button className='uppercase bg-gray-200 px-6 py-2 rounded-full tracking-wider text-sm'>Digital banking platform</button>
    </div>
  )
}

export default Navbar