import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer>
        <div className="logo-footer">
            <img src="../src/images/logo.png" alt="" />
            <h3>Virtual Class for Zoom</h3>
        </div><br /><br />
        <div className="text-footer">
            <h3>Subscribe to get our Newsletter</h3>
        </div><br /><br />
        <form action="">
            <input type="text" placeholder='your email' />
            <button>subscribe</button>
        </form><br /><br />
        <p className='date'>© 2021 Class Technologies Inc. </p>
    </footer>
  )
}

export default Footer