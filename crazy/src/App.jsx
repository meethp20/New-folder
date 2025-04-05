// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router'


import  Home  from './Components/Home'

import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import About from './Components/About'

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element ={ <Projects/>} />
        
      </Routes>
    </>
  )
}

export default App
