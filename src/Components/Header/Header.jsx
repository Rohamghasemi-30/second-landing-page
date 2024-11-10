import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='container'>
        <div className="part-left">
            <h1><span className='text-orenge'>Studying</span> Online is now much easier</h1>
            <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
            <div className="join">
                <button>Join for free</button>
                <img src="../src/images/join.png" alt="" />
            </div>
        </div>
        <div className="part-right">
            <img src="../src/images/girl.png" alt="" />
        </div>
    </div>
  )
}

export default Header