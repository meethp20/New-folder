import React from 'react'
import { NavLink } from 'react-router'
import { BrowserRouter } from 'react-router'
function Navbar() {
  return (
    <div className='p-4 bg-gray-400 flex justify-between'>   
         <nav>
            <ul>
                <li> <NavLink to='/about'className={((isActive)=>{
                  isActive? 'bg-green-500 text-white':'text-black'
                })} > 
                  about
            </NavLink> </li>
            <li> <NavLink to='/project'className={((isActive)=>{
                  isActive? 'bg-green-500 text-white capitalize ':'text-black capitalize'
                })} > 
                  proj%ct
            </NavLink> </li>
              
            </ul>
         </nav>
    </div>
  )
}

export default Navbar