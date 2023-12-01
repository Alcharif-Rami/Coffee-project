// Origins.js
import React from 'react';
import FlipCard from '../FlipCard';
import '../FlipCard.css'; 

const Origins = () => {
  return (
    <div>
      <h1>ORIGINS</h1>
      <div className="row">
        {/* Example usage of FlipCard without the image */}
        <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />
         <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />
         <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />
         <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />
         <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />
         <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />
        <FlipCard
        frontImageSrc="/photos/Flags-picture.jpeg"
          backTitle="Custom Title"
          backDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem nunc, sollicitudin a nisi sodales, imperdiet dignissim enim. Nam sapien quam"
        />

        {/* Add more FlipCard components as needed */}
      </div>
    </div>
  );
};

export default Origins;
