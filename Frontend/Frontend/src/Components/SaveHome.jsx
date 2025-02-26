import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SaveHome = () => {
  const animationProps = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 0.5,
      y: { type: 'spring', stiffness: 60 },
      opacity: { duration: 0.3 },
      ease: 'ease-out',
      duration: 0.8,
    },
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <motion.div className="md:w-1/2" {...animationProps}>
          <img
            src="https://img.freepik.com/premium-photo/beautiful-girl-yellow-background_392895-212792.jpg?uid=R155647787&ga=GA1.1.74947205.1720868009&semt=ais_hybrid"
            alt="Woman with inspiration ideas"
            className="w-full md:max-h-[600px] rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        <div className="md:w-1/2">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
            {...animationProps}>
            Save Ideas You Love
          </motion.h1>

          <motion.p
            className="text-lg mb-8"
            {...animationProps}
            transition={{
              ...animationProps.transition,
              delay: 0.7,
            }}>
            Every great idea starts with a spark—don't let yours fade away. Save anything that
            catches your eye, from stunning decor and fashion trends to innovative DIY projects,
            revisit them whenever you need, and bring your creative vision to life. With all your
            saved ideas in one place, you'll always have inspiration at your fingertips!
          </motion.p>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 0.3 },
              ease: 'ease-in',
              duration: 0.8,
            }}>
            <Link to="/saveIdeas">
              <button
                className="bg-white text-red-500 border border-gray-300 hover:bg-red-500 hover:text-white 
                hover:border-red-500 transition-colors duration-300 font-medium rounded-full 
                px-8 py-3 text-lg">
                Start Collecting
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SaveHome;
