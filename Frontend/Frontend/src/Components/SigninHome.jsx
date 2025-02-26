import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SigninHome = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-[85vh] mb-[5rem] items-center justify-center mt-20 max-w-7xl">
      <motion.div
        initial={{ y: 180, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.0,
          y: { type: 'spring', stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: 'ease-out',
          duration: 1,
        }}
        className="relative w-full md:w-1/2 hidden md:block text-start max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
          Join Us & Bring Your Ideas to Life!
        </h1>
        <p className="text-lg mb-8">
          Sign up today to save, share, and explore endless inspiration tailored just for you!
        </p>
      </motion.div>

      {/* Sign-in Form */}
      <div className="md:w-[40vw] bg-white p-8 shadow-lg rounded-lg md:ml-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
          Welcome to PicSearch
        </h2>
        <p className="text-center text-gray-600 mb-6">Find new ideas to try</p>

        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Create a password"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="date"
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white p-4 rounded-lg text-lg font-semibold hover:bg-red-600">
            Continue
          </button>

          <div className="text-center text-gray-600">OR</div>

          <button className="w-full flex items-center justify-center gap-2 border p-4 rounded-lg hover:bg-gray-100">
            <FaGoogle />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already a member?{' '}
          <a href="#" className="text-red-500 font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninHome;
