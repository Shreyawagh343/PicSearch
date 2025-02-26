import React from 'react';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Discover, Save, and <span className="text-red-500">Share Your Inspiration</span>
      </h1>

      <p className="text-lg md:text-xl mx-auto max-w-3xl mb-8">
        Discover and organize ideas effortlessly with our visual bookmarking platform. From fashion
        to travel, curate your favorite images, create mood boards, and get inspired
        <span className="text-red-500"> all in one place. Start exploring today!</span>
      </p>

      <div className="mb-12">
        <Button variant="outlined" color="error" size="large" className="px-8">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default Hero;
