import React from "react";
import { motion } from "framer-motion";
const SaveIdea = () => {
  return (
    <div className="md:flex pb-[3rem] md:p-[0rem] pt-[1rem] mt-[3rem] md:mt-[3rem] md:bg-[#f5ebe0]">
      <motion.div 
       initial={{ y: 200, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{
         delay: 1.0,
         y: { type: "spring", stiffness: 60 },
         opacity: { duration: 0.2 },
         ease: "ease-out",
         duration: 1,
       }}
      
      className="ml-[3rem] md:mt-[8rem] mr-[2rem]">
        <h1 className="text-center text-red-500 mt-[3rem] md:mt-[5rem]  text-4xl md:text-5xl ">
        Save Ideas You Love
        </h1>
        <p className="text-center mt-[1rem] text-[1.3rem] md:text-[1.4rem]">"Looking for fresh ideas? Explore endless creativity, from stunning home decor to DIY projects. Try searching for ‘creative ideas for home decor’ and uncover inspiration to transform your space!" </p>
        </motion.div>
        <motion.div 
        
        initial={{ x: 200, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{
         delay: 1.0,
         x: { type: "spring", stiffness: 60 },
         opacity: { duration: 0.2 },
         ease: "ease-in",
         duration: 1,
       }}
      
        className=" mt-[2rem] md:mt-[6rem] md:flex mb-[2rem] md:mr-[5rem]">
        <div className="bg-[url(https://img.freepik.com/premium-photo/dream-catcher-gray-background_110491-1561.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover ml-[2.3rem] h-[30vh] w-[80vw] md:h-[40vh] md:w-[30vw] rounded-[3rem] md:rounded-[3rem] md:mt-[8rem] md:ml-[2rem]"></div>
        <div className="hidden md:block bg-[url(https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811473.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover h-[60vh] w-[20vw] rounded-[3rem] -ml-[19rem] static z-30"></div>
        <div className="hidden md:block bg-[url(https://img.freepik.com/free-photo/3d-rendering-modern-design-marble-tile-toilet-bathroom-with-shelf_105762-2074.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover h-[35vh] w-[20vw] rounded-[3rem] -ml-[7rem] -mt-[4rem]"></div>
        <div className="hidden md:block bg-[url(https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024953.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid)] bg-cover h-[35vh] w-[20vw] rounded-[3rem] -ml-[20rem] mt-[14rem]"></div>
      </motion.div>
    </div>
  );
};

export default SaveIdea;
