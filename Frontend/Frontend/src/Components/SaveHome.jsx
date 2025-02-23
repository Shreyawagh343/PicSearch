import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SaveHome = () => {
  return (
    <div className='w-[100vw] h-[80vh] md:flex mb-[7rem]'>
        <div className="">
            <motion.img 
            
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.0,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "ease-out",
              duration: 1,
            }}
            
            
            src="https://img.freepik.com/premium-photo/beautiful-girl-yellow-background_392895-212792.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid" alt=""  className='md:w-[27vw] md:h-[70vh] md:ml-[10rem] md:mt-[5rem]'/>
        </div>
        <div className="">
         <motion.h1 
         initial={{ y: 180, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{
           delay: 1.0,
           y: { type: "spring", stiffness: 60 },
           opacity: { duration: 0.2 },
           ease: "ease-out",
           duration: 1,
         }}
         className=" text-red-500 mt-[3rem] md:mt-[8rem]  text-4xl md:text-5xl md:ml-[15rem]">
          Save Ideas You Love
        </motion.h1>
        <motion.p 
        initial={{ y: 180, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.0,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "ease-out",
          duration: 1,
        }}
        className="mt-[2rem] text-[1.3rem] md:text-2xl md:ml-[10rem] w-[40vw]">Every great idea starts with a spark—don’t let yours fade away. Save anything that catches your eye, from stunning decor and fashion trends to innovative DIY projects, revisit them whenever you need, and bring your creative vision to life. With all your saved ideas in one place, you’ll always have inspiration at your fingertips!</motion.p>
        <Link to="/saveIdeas"><motion.button
          initial={{ x: 180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "ease-in",
            duration: 1,
          }}
          className="w-[60vw] md:w-[18vw] text-[1.3rem] md:text-[1.4rem] rounded-[4rem] h-[10vh] md:h-[9vh] border border-black ml-[0rem] md:ml-[20rem] mt-[2rem] hover:text-white hover:bg-red-400 hover:border-none text-red-500 font-bold"
        >
          Start Collecting
        </motion.button>
        </Link>
        </div>
    </div>
  )
}

export default SaveHome