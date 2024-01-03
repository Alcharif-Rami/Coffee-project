import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Background from "../Background";
import BrewCard from "../BrewingPage";
import "../BrewingPage.css";

const BrewingCarousel = () => {
  const brewing = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const brewData = [
    {
      id: 1,
      imagesrc: "/photos/Brewing/V60.webp",
      description:
        "The V60 was introduced by Hario in 2005 after many years of research and has since become a popular choice for coffee preparation. This is because the taste of V60 coffee is clean, smooth, and complex at the same time, especially with lighter roast coffees",
    },
    {
      id: 2,
      imagesrc: "/photos/Brewing/aeropress.webp",
      description:
        " The Aeropress is a piston-style brewer that forces coffee through a thin paper filter directly into a cup. It brews just a single serving of coffee at a time, but its size and durability make it a favorite device among travelers and campers.",
    },
    {
      id: 3,
      imagesrc: "/photos/Brewing/coldbrew.webp",
      description:
        "Cold brewing leaves behind some acids that hot coffee pulls out easily. This not only creates a coffee that is flavorful, smooth, and mellow, but also one that can hold up for days and still taste fresh.",
    },
    {
      id: 4,
      imagesrc: "/photos/Brewing/syphone.webp",
      description:
        "Siphon (vacuum pot) coffee is a brewing method that involves a process of mixing coffee with boiling water ascended from the flask through siphonage to extract and filter the coffee.",
    },
  ];

  const brew = brewData.map((item) => (
    <BrewCard id={item.id} src={item.imagesrc} description={item.description} />
  ));

  return (
    
    <div className="brewing-carousel-container">
      <Background/>
      <Carousel responsive={brewing} className="brewing-carousel">
        {brew}
      </Carousel>
    </div>
  );
};

export default BrewingCarousel;
