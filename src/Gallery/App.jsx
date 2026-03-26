import React,{useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [userData,setUserData]=useState([])
  const [index,setIndex]=useState(1)

  async function getData(){
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`)
    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(function(){
    getData()
  },[index])
  let printUserData=<div className='text-white text-xs absolute top-1/2 left-1/2'>Loading......</div>
  if (userData.length>0){
    printUserData=userData.map(function(ele,idx){
      return (
        <div key={idx}>
          <a href={ele.url}>
            <div className='h-40 w-40 flex'>
            <img className='h-full object-cover rounded-2xl' src={ele.download_url} alt="" />
            </div>
            <div>
              <h2 className='text-xl text-center'>{ele.author}</h2>
            </div>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='m-10 text-4xl text-center'>Images</h1>
      <div className='flex flex-wrap gap-4  overflow-auto w-full h-[90]'>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-8'>
        <button style={{opacity: index == 1 ? 0.4 : 1}} onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold'>Prev</button>
        <h3>Page {index}</h3>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])

         }
         } className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold'>Next</button>
      </div>
    </div>
  )
}
export default App