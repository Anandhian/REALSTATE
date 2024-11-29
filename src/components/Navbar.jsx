import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

    const [mobileMenu,setMobileMenu]=useState(false)
   

  return (
    <div className='absolute top-0 left-0 w-full z-0'>
        <div className='container bg-transparent mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
<img src={assets.logo} alt="" />
<ul className='hidden md:flex gap-7 text-white'>
    <a className='cursor-pointer hover:text-gray-400' href="#Home">Home</a>
    <a className='cursor-pointer hover:text-gray-400' href="#About">About</a>
    <a className='cursor-pointer hover:text-gray-400' href="#Projects">Projects</a>
    <a className='cursor-pointer hover:text-gray-400' href="#Testimonials">Testimonials</a>
</ul>
<button  className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
<img className=' md:hidden ' onClick={()=>{setMobileMenu(true)}} src={assets.menu_icon} alt="" />
        </div>

        {/*side menu */}
<div className={`md:hidden bg-white transition-all   fixed  top-0 right-0 bottom-0 overflow-hidden ${mobileMenu?"w-full ": "w-0 h-0"}       `}>
    <div className='flex justify-end p-6 cursor-pointer'>
        <img src={assets.cross_icon} onClick={()=>{setMobileMenu(false)}}  alt="" />
    </div>
    
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a  onClick={()=>{setMobileMenu(false)}}   className='px-4 py-2 rounded-full inline-block'  href="#Home">Home</a>
                <a  onClick={()=>{setMobileMenu(false)}}   className='px-4 py-2 rounded-full inline-block'  href="#About">"#About"</a>
                <a  onClick={()=>{setMobileMenu(false)}}   className='px-4 py-2 rounded-full inline-block'  href="#Projects">Projects</a>
                <a  onClick={()=>{setMobileMenu(false)}}   className='px-4 py-2 rounded-full inline-block'  href="#Testimonials">Testimonials</a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
