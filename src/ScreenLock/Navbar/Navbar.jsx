import React from 'react'
import "../index.css"
import {SignalHigh,SignalLow,BatteryMedium} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex justify-between text-white'>
        <div>
            <p>Jio True5G--Jio | airtel</p>
        </div>
        <div className='flex gap-2'>
            <SignalHigh />
            <SignalLow />
            <BatteryMedium />
        </div>
    </div>
  )
}

export default Navbar