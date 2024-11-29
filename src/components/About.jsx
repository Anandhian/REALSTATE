import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
    return (
         <motion.div 
        initial={{opacity:0,x:400}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}} 
        
         className='mt-8 px-6   ' id='About'>
            <div className='text-center flex flex-col  items-center '>
                <h1 className='font-bold text-2xl  text-center '>About <span className='font-light underline-offset-2 underline'>Our Brand</span></h1>
<p className=' md:w-[500px] w-[300px] py-4  px-20'>Passionate ABout Properties ,Dedicated to yor vision</p>
            </div>


            <div className='flex flex-col lg:flex-row items-center md:px-20 gap-10  '>


                <div>< img className='md:w-96 w-40  ' src={assets.brand_img} alt="" /></div>
                <div className='flex flex-col mx-auto   justify-center    '>
                    <div className='grid grid-cols-2 gap-6      '>

                    <div className='mt-4'>
                        <h1 className='font-bold text-2xl'>10+</h1>
                        <p className='font-medium text-sm'>Years of Excellence</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>12+</h1>
                        <p className='font-medium text-sm'>Projects Compleated</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>20+</h1>
                        <p className='font-medium text-sm'>MN.Sq.Ft.Deliverd</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>25+</h1>
                        <p className='font-medium text-sm'>Ongoing Projects</p>
                    </div>

                
                    </div>


                    <p className='md:w-[500px] mt-4'>Real estate is property in the form of land, houses or other buildings. Title insurance guarantees the purchaser of real estate against loss from undiscovered defects in the title to property that has been purchased. Personal property is property other than real estate, or property that is movable or separable from it</p>
                    <div className='mt-5 '>
                    <button className='border border-blue-700 px-5 py-1 rounded bg-blue-700 text-white'> Learn More</button>
                    </div>
                </div>
             



            </div>


        </motion.div>
    )
}

export default About
