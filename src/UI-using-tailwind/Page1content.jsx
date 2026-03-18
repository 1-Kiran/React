import React from 'react'
import "./index.css"
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-3 h-[80vh] flex gap-10 items-center bg-white px-18 '>
        <LeftContent />
        <RightContent />
    </div>
  )
}
export default Page1content