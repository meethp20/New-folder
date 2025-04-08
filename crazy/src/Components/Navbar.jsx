import React from 'react'
import { NavLink } from 'react-router'
function Navbar() {
  return (
    <div className='p-4 bg-white flex justify-between'>   
         <nav>
            <ul>
                <li> <NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? 'bg-green-500 text-white' : 'text-black'}
>
  About
</NavLink></li>
            <li> <NavLink 
  to="/projects" 
  className={({ isActive }) => isActive ? 'bg-green-500 text-white' : 'text-black'}
>
  Projects
</NavLink> </li>
            </ul>
         </nav>
    </div>
  )
}

export default Navbar