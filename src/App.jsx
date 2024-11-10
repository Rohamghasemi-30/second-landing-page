import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App