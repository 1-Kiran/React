import React from 'react'
import RightCard from './RightCard'

function RightContent() {
  return (
    <div className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-20'>
        <RightCard img="https://tse2.mm.bing.net/th/id/OIP.s_OeH8_Rp8uF1Upq4CnfDgHaLG?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <RightCard img="https://tse1.mm.bing.net/th/id/OIF.3vmqvSYkWeL8nKuTR8WKkA?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <RightCard img="https://tse4.mm.bing.net/th/id/OIP.9G0mrDz-au2BuL-RqHDXIgHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"/>
        <RightCard img="https://tse3.mm.bing.net/th/id/OIP.TFbwkIrEtAihtU7gxVevdAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"/>
        <RightCard />
        <RightCard />
    </div>
  )
}

export default RightContent