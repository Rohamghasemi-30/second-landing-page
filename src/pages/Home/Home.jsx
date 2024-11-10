import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import PartSecondeHome from '../../Components/PartSecondeHome/PartSecondeHome'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <PartSecondeHome /><br />
        <Footer />
    </div>
  )
}

export default Home