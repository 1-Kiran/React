import React from 'react'
import "./index.css"
import Footer from "./Footer/Footer.jsx"
import Navbar from './Navbar/Navbar.jsx'

function App() {
  return (
    <div className='bg-black h-screen w-full p-50 items-center'>
        <div className='bg-[url(https://tse3.mm.bing.net/th/id/OIP.soaPHkAq5MrZaVEZLu9QUQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3)] flex flex-col justify-between w-100 h-140 rounded-2xl p-4 text-white'>
            <div>
                <Navbar />
                <div className='mt-10'>
                    <h1 className='text-4xl'>Sunday</h1>
                    <h1 className='text-4xl'>12:43</h1>
                    <h4 className='text-xl'>March 29</h4>
                </div>
            </div>

            <div className=''>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default App