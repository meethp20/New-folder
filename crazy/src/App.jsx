// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router'


import  Home  from './Components/Home'

import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import About from './Components/About'
import Layout from './Components/Layout'

function App() {
  return (
    <>
      
      <Routes>
          <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects/>} />   
          </Route>
        
      </Routes>
    </>
  )
}

export default App
