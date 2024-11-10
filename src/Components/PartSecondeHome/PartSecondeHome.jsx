import React from 'react'
import "./PartSecondeHome.css"

function PartSecondeHome() {
  return (
    <div className='container-seconde-part-home'>
       <div className='part-one'>
       <h2>Our Success</h2>
       <p className='text-OurSuccess'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
       </div>
        <div className="number">
            <div className="value">
                <h2>15K+</h2>
                <h4>Students</h4>
            </div>
            <div className="value">
                <h2>75%</h2>
                <h4>Total success</h4>
            </div>
            <div className="value">
                <h2>35</h2>
                <h4>Main questions</h4>
            </div>
            <div className="value">
            <h2>26</h2>
            <h4>Chief experts</h4>
            </div>
            <div className="value">
            <h2>16</h2>
            <h4>Years of experience</h4>
            </div>
        </div><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="part-two">
            <h2><span className='color-text'>All-In-One</span> Cloud Software.</h2><br /><br />
            <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            <div className="box-card">
                <div className="card">
                    <img src="../src/images/image-1.png" alt="" />
                    <h3>Customer Tracking</h3>
                    <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </div>
                <div className="card">
                    <img src="../src/images/image-1.png" alt="" />
                    <h3>Customer Tracking</h3>
                    <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </div>
                <div className="card">
                    <img src="../src/images/image-1.png" alt="" />
                    <h3>Customer Tracking</h3>
                    <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartSecondeHome