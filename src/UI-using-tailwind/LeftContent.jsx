import React from 'react'
import HearoText from './HearoText.jsx'
import Arrow from "./Arrow.jsx"

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between'>
        <HearoText />
        <Arrow />
    </div>
  )
}

export default LeftContent