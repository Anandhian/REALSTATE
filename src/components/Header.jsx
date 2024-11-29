import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'
import { motion } from "motion/react"


const Header = () => {
  return (
    <div
  className="min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden"
  style={{ backgroundImage: "url('/header_img.png')" }}
  id="Header"
>
  <Navbar />
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="container text-center mx-auto text-white px-9 md:px-6 lg:px-12"
  >
    <h2 className="inline-block font-bold w-52 md:text-2xl lg:text-3xl lg:w-72">
      Explore homes that fit your dream
    </h2>
    <div className="py-7 px-5 flex flex-col lg:flex-row md:flex-row justify-center items-center gap-6">
      <a
        className="border gap-3 border-white w-20 hover:border-white rounded px-3 py-2"
        href="#Projects"
      >
        Projects
      </a>
      <a
        className="border gap-3 border-blue-700 bg-blue-700 hover:bg-transparent w-28 hover:border-white rounded px-3 py-2"
        href="#Contact"
      >
        Contact Us
      </a>
    </div>
  </motion.div>
</div>
  )
}

export default Header
