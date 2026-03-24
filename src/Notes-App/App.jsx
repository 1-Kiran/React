import React, { useState } from 'react'
import {X} from "lucide-react"
import "./index.css"
function App() {
  const [list,setList]=useState([])
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const SubmitHandler=(e)=>{
    e.preventDefault()

    const copyList=[...list];

    copyList.push({title,details})
    setList(copyList)

    setTitle('')
    setDetails('')
    console.log(copyList)

  }

  const delteNote=(idx)=>{
    const copyList=[...list]
    copyList.splice(idx,1)

    setList(copyList)
  }
  return (
    <div className='h-screen bg-blackss text-white lg:flex'>
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }} className='gap-10 justify-between items-start p-12'>
            <h1 className='text-4xl font-bold font-medium mb-10'>Add Notes</h1>
            <input value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }} className='border-2 font-medium w-full = py-2 px-5 rounded' type="text" placeholder='Enter Notes Heading'/>
            
            <textarea value={details} onChange={(e)=>{
              setDetails(e.target.value)
            }} className='border-2 font-medium w-full h-35 py-2 px-5 mt-4 rounded' name="" placeholder='Enter Details' id=""></textarea>
            
            <button className=' bg-white text-black border-2 font-medium mt-4 w-full py-2 px-5 rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-1'>
        <h1 className='font-bold text-4xl'>Recent Notes </h1>
        <div className='flex flex-wrap gap-5 mt-10 h-[90%] overflow-auto'>
        {list.map(function(elem,idx){
          return <div key={idx} className="relative flex items-start justify-between items-center flex-col leading-fit h-50 w-40 pb-4 p-1 rounded-2xl text-black bg-cover bg-[url('https://tse4.mm.bing.net/th/id/OIP.HiHK4Pa1BI9ovQXxBgBjygHaHy?rs=1&pid=ImgDetMain&o=7&rm=3')] overflow-auto">
            <div>
            <h3 className='absolute top-7 right-5 bg-red-500 p-1 rounded-full text-xs'>
              <X size={16} color="#ffff" strokeWidth={2.77}/>
              </h3>
            <h3 className='font-bold text-xl text-center pt-8'>{elem.title}</h3>
            <p className='mt-3 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
            <button onClick={delteNote} className='w-full text-xs text-white py-1  cursor-pointer active:scale-90 bg-red-600 rounded-2xl'>Delete</button>
          </div>

        })}
        </div>
      </div>
    </div>
  )
}

export default App