import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Image.css";
const Image = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const sliderImageUrl = [
        {
          url:
            "https://img.freepik.com/free-photo/high-angle-beautiful-plants-home_23-2149155732.jpg?t=st=1739717165~exp=1739720765~hmac=a05fe932df1ad4caf8846bd611a3dcff51bb10bbe7e5f75e645ddc35fa119239&w=740"
        },
        {
          url:
            "https://img.freepik.com/free-photo/stylish-woman-trendy-outfit-posing-summer-terrace-good-sunny-day_291650-519.jpg?t=st=1739717262~exp=1739720862~hmac=284bb2f8d58453f9ccccfb94bc1f4f08304aca0234218c63702c5754f950bb05&w=740"
        },
        //Second image url
        {
          url:
            "https://img.freepik.com/free-photo/view-potted-plant-room-with-chair-shelf_23-2149427964.jpg?t=st=1739717310~exp=1739720910~hmac=cc8758e44b57429efd816e6d3a2c5b523a39e3ac6d2258c189806506370cf0cf&w=740"
        },
        //Third image url
        {
          url:
            "https://img.freepik.com/free-photo/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.jpg?t=st=1739717374~exp=1739720974~hmac=51ee45c33bb31ed037e7a39c2b7fc23d266af785c1ec4d224b2a5abcf8f91255&w=740"
        },
      
        //Fourth image url
      
        {
          url:
            "https://img.freepik.com/premium-photo/easter-background-frame-with-spring-flowers-angel-easter-creative-greeting-card_440424-901.jpg?w=740"
        }
      ];
  return (
    <>
    <div className="heading">
        <h1 className='text-5xl text-red-600 text-center mt-16 font-sans'>Discover, Save, and <span className='text-black'> Share Your Inspiration</span></h1>
    </div>
 <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
    </>
  )
}

export default Image