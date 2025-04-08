import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="bg-[#000333] min-h-screen text-white scroll-smooth  ">
      <div className="text-center py-6 text-xl font-semibold">
        Hey, this is a router check!
      </div>
     <input type="date" className='scheme-light'/>
      <div className="flex justify-center -space-x-7 pb-10">
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className={`w-28 h-36 border-5 ring-3 rounded-2xl transition-transform hover:scale-125 hover:z-50 focus:scale-3d ${
              i % 2 === 0 ? 'rotate-12 hover:rotate-0  bg-amber-700  hover:bg-amber-900' : '-rotate-12 hover:rotate-0 hidden bg-emerald-700  hover:bg-emerald-900'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default About;
