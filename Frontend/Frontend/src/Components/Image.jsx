import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Image.css';
import { motion } from 'framer-motion';

const Image = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 }, // Updated min value to 0
      items: 1, // Show one item at a time for better visibility
      slidesToSlide: 1,
      partialVisible: true, // Ensuring some part of the next image is visible
    },
  };


  const sliderImageUrl = [
    {
      url: 'https://img.freepik.com/free-photo/high-angle-beautiful-plants-home_23-2149155732.jpg?t=st=1739717165~exp=1739720765~hmac=a05fe932df1ad4caf8846bd611a3dcff51bb10bbe7e5f75e645ddc35fa119239&w=740',
    },
    {
      url: 'https://img.freepik.com/free-photo/stylish-woman-trendy-outfit-posing-summer-terrace-good-sunny-day_291650-519.jpg?t=st=1739717262~exp=1739720862~hmac=284bb2f8d58453f9ccccfb94bc1f4f08304aca0234218c63702c5754f950bb05&w=740',
    },
    {
      url: 'https://img.freepik.com/free-photo/view-potted-plant-room-with-chair-shelf_23-2149427964.jpg?t=st=1739717310~exp=1739720910~hmac=cc8758e44b57429efd816e6d3a2c5b523a39e3ac6d2258c189806506370cf0cf&w=740',
    },
    {
      url: 'https://img.freepik.com/free-photo/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.jpg?t=st=1739717374~exp=1739720974~hmac=51ee45c33bb31ed037e7a39c2b7fc23d266af785c1ec4d224b2a5abcf8f91255&w=740',
    },
    {
      url: 'https://img.freepik.com/premium-photo/easter-background-frame-with-spring-flowers-angel-easter-creative-greeting-card_440424-901.jpg?w=740',
    },
  ];

  return (
    <div className="my-16 px-4 md:px-8">
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            y: { type: 'spring', stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: 'ease-in',
            duration: 1,
          }}
          className="mb-2">
          <h3 className="text-xl">Explore featured boards</h3>
          <h1 className="text-red-500 text-3xl md:text-4xl font-bold">Discover new ideas</h1>
        </motion.div>
      </div>

      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style">
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider px-1 z-0" key={index}>
                <img
                  src={imageUrl.url}
                  alt={`Featured idea ${index + 1}`}
                  className="rounded-lg shadow-md h-64 w-full object-cover"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Image;
