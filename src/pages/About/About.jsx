import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./About.css"
import AboutContent from '../../Components/AboutContent/AboutContent'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <div>
        <Navbar />
        <img src="../src/images/image-about.png" alt="" />
        <AboutContent />
        <Footer />
    </div>
  )
}

export default About