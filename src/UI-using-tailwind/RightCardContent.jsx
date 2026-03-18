import React from 'react'
import "./index.css"
import {MoveRight} from "lucide-react"

const RightCardContent = () => {
  return (
        <div className='absolute left-0 top-0 h-full w-full p-10 flex flex-col justify-between'>
            <h1 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 justify-center items-center'>1</h1>
            <div>
            <p className='text-xl leading-normal mb-10 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eum ad et praesentium vero numquam.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full text-lg'>Satisfied</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full text-lg'><MoveRight /></button>
            </div>
            </div>
        </div>  
        )
}

export default RightCardContent