import React, { useState, useEffect } from "react";
import "./Slider.css";

const ImageSlider = () => {

  // <--------------For changing Manually----------------->
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // <--------------For Changing Automatically ------------>
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds (adjust as needed)
  
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [nextSlide]);
  


  // <-------------Slide Data------------->
  const slideData = [
    {
      index: 0,
      headline: "The peak is just the beginning of the journey.",
      button: "Mountains",
      src: "https://res.cloudinary.com/chasset/f_webp,w_720,h_480/hbimages/desktop/1684223569373-Nanda-Devi-Peak-Auli-Chamoli-Uttarakhand.jpg",
    },
    {
      index: 1,
      headline: "Think Blue and Go Green. Stop Marine Pollution",
      button: "Oceans",
      src: "https://img.freepik.com/premium-photo/beautiful-seascape-with-blue-waves-crashing-rocksgenerative-ai_391052-12693.jpg",
    },
    {
      index: 2,
      headline: "Protect the Forests, Preserve Your Future.",
      button: "Forests",
      src: "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
    },
    {
      index: 3,
      headline: "A Good Planet Is Hard to Find.",
      button: "Earth",
      src: "https://t4.ftcdn.net/jpg/05/75/28/67/360_F_575286707_XWzAVa98BubEYQjAy2LsfRWXDCgc2gJT.jpg",
    },
  ];


// <-----------------XML Content----------------->
  return (
    <div className="slider-container">

      <div className="slider">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            <img
              src={slide.src}
              alt={slide.headline}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="slide-content">
              <h2>{slide.headline}</h2>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#9665;
        </button>
        <button className="next" onClick={nextSlide}>
          &#9655;
        </button>
      </div>
      <div className="slide-indicators">
        {slideData.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "indicator active" : "indicator"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
