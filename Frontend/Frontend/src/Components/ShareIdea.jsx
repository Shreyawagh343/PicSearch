import React from "react";
import { motion } from "framer-motion";

const ShareIdea = () => {
  return (
    <div className=" md:pb-[3rem] pb-[2rem] md:mt-[0rem] -mt-[13rem] md:flex">
      <div className="md:mt-[2rem] mt-[10rem] md:ml-[3rem] md:flex">
        <div className="md:flex md:flex-col md:mt-[5rem]">
          <motion.img
            initial={{ x: 160, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.0,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "ease-in",
              duration: 1,
            }}
            src="https://img.freepik.com/free-photo/full-shot-woman-posing-fast-fashion-concept_23-2150805334.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid"
            alt=""
            className="md:h-[50vh] md:w-[18vw] h-[50vh] mt-[2rem] w-[80vw] ml-[2.5rem] rounded-[3rem]"
          />
          <motion.img
            initial={{ x: 160, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.0,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "ease-in",
              duration: 1,
            }}
            src="https://img.freepik.com/free-photo/glass-building-ith-reflected-sun_1127-2016.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid"
            alt=""
            className="hidden md:block md:h-[50vh] md:w-[18vw] h-[50vh] mt-[2rem] w-[80vw] ml-[2.5rem] rounded-[3rem]"
          />
        </div>
        <div className="">
          <motion.img
            initial={{ y: 160, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.0,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "ease-in",
              duration: 1,
            }}
            src="https://img.freepik.com/free-photo/view-st-petersburg-morning_1398-2807.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid"
            alt=""
            className="hidden md:block  md:h-[50vh] md:w-[18vw] h-[50vh] mt-[2rem] w-[80vw] ml-[2.5rem] rounded-[3rem]"
          />
          <motion.img
            initial={{ y: 160, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.0,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "ease-in",
              duration: 1,
            }}
            src="https://img.freepik.com/free-photo/mid-shot-woman-holding-flowers_23-2148683859.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid"
            alt=""
            className="hidden md:block md:h-[50vh] md:w-[18vw] h-[50vh] mt-[2rem] w-[80vw] ml-[2.5rem] rounded-[3rem]"
          />
        </div>
      </div>
      <motion.div
        initial={{ y: 180, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "ease-in",
          duration: 1,
        }}
        className="ml-[5rem] -mt-[6rem] md:mt-[7rem] mr-[2rem]"
      >
        <h1 className="text-center mt-[7rem] md:mt-[10rem] pt-[3rem] -ml-[2rem] font-bold text-4xl md:text-6xl ">
          Inspire & Be Inspired
        </h1>
        <p className="text-center mt-[1rem] text-[1.3rem]  md:w-[40vw] w-[70vw] -ml-[1rem]">
          "Share your creativity, discover new ideas, and turn inspiration into
          reality!"
        </p>
        <motion.button
          initial={{ x: 180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "ease-in",
            duration: 1,
          }}
          className="w-[60vw] md:w-[18vw] text-[1.3rem] md:text-2xl rounded-[4rem] h-[10vh] md:h-[9vh] border border-black ml-[0rem] md:ml-[10rem] mt-[2rem] hover:text-white hover:bg-red-400 hover:border-none text-red-500"
        >
          Join the Inspiration
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ShareIdea;

// initial={{ y: 100, opacity: 0 }}
// whileInView={{ y: 0, opacity: 1 }}
// transition={{
//     delay: 0.7,
//     y: { type: 'spring', stiffness: 60 },
//     opacity: { duration: 0.2 },
//     ease: "ease-in",
//     duration: 1
// }}
