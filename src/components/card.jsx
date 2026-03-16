// import React from 'react'
import "./card.css"
import {Bookmark} from "lucide-react";



function Card() {
  return (
<div className='parent'>
            <div className="card">
                <div className="top">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    <button>Save <Bookmark size={20} /></button>
                </div>
               <div>
               <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div className="tag">
                        <h4>Part Time</h4>
                        <h4>Senior Level</h4>
                    </div>

                </div>
               </div>
                <div className="bottom">
                    <div>
                        <h3>$120</h3>
                        <p>Mumbai, India</p>
                    </div>
                    <button>Apply now</button>
                </div>
            </div>
        </div>
    )
}

export default Card