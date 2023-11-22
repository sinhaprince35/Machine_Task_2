import React from "react";
import "./Slider.css";

const ImageSlider = () => {
  // <----------Slide Data----------->
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

  return (
    <div>
      <h1>Image Slider</h1>
    </div>
  );
};

export default ImageSlider;
