import React from 'react';
import { motion } from 'framer-motion';

const ShareIdea = () => {
  const animationProps = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 0.4,
      y: { type: 'spring', stiffness: 80 },
      opacity: { duration: 0.5 },
      ease: 'easeOut',
      duration: 0.9,
    },
  };

  const images = [
    'https://img.freepik.com/free-photo/full-shot-woman-posing-fast-fashion-concept_23-2150805334.jpg',
    'https://img.freepik.com/free-photo/glass-building-ith-reflected-sun_1127-2016.jpg',
    'https://img.freepik.com/free-photo/view-st-petersburg-morning_1398-2807.jpg',
    'https://img.freepik.com/free-photo/mid-shot-woman-holding-flowers_23-2148683859.jpg',
  ];

  return (
    <div className="py-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
          {images.map((src, index) => (
            <motion.img
              key={index}
              {...animationProps}
              transition={{ ...animationProps.transition, delay: 0.6 + index * 0.2 }}
              src={src}
              alt={`Inspiration ${index + 1}`}
              className="w-full h-[250px] md:h-[300px] rounded-3xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Text Section */}
        <motion.div
          {...animationProps}
          transition={{ ...animationProps.transition, delay: 1.2 }}
          className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
            Inspire & Be Inspired
          </h1>
          <p className="text-lg mb-8">
            "Share your creativity, discover new ideas, and turn inspiration into reality!"
          </p>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
            className="bg-white text-red-500 border border-gray-300 hover:bg-red-500 hover:text-white 
                hover:border-red-500 transition-colors duration-300 font-medium rounded-full 
                px-8 py-3 text-lg text-left">
            Join the Inspiration
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ShareIdea;
