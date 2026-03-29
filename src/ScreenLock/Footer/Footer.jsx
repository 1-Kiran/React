import React from 'react'
import {Flashlight, Camera, ChevronUp} from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex justify-between'>
        <div className='border-2 text-white border-black rounded-full cursor-pointer'>
            <Flashlight size={60} className='p-2'/>
        </div>
        <div>
        <ChevronUp />
        </div>
        <div className='border-2 text-white border-black rounded-full'>
            <Camera size={60} className='p-2 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Footer