import React from 'react'
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
        <motion.h1
        
        initial={{ y: 200, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{
         delay: 0.8,
         y: { type: "spring", stiffness: 60 },
         opacity: { duration: 0.2 },
         ease: "ease-in",
         duration: 1,
       }}
        className='text-5xl  mt-[3rem] md:mt-[4rem] text-center'>Discover, Save, and <span className='text-red-500 text-5xl'>Share Your Inspiration</span></motion.h1>
        <motion.p 
         initial={{ x: 200, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{
           delay: 0.8,
           x: { type: "spring", stiffness: 60 },
           opacity: { duration: 0.2 },
           ease: "ease-in",
           duration: 1,
         }}
        
        className=' text-[1.3rem] md:text-2xl text-center mt-[1.5rem] md:ml-[6rem] md:mr-[6rem] ml-[2rem] mr-[2rem]'>Discover and organize ideas effortlessly with our visual bookmarking platform. From fashion to travel, curate your favorite images, create mood boards, and get inspired <span className='text-red-500'> all in one place. Start exploring today!</span></motion.p>
        <motion.div 
        
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.0,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "ease-in",
          duration: 1,
        }}
        className="mx-[8rem] my-[2rem] md:mx-[44rem] md:my-[2rem] ">
        <Button variant="outlined" color="error">
        Explore
      </Button>
      </motion.div>
    </div>
  )
}

export default Hero