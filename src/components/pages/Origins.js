// Origins.js
import React from "react";
import FlipCard from "../FlipCard";
import "../FlipCard.css";

import Background from "../Background";

const Origins = () => {
  return (
    <div>
      <div className="row">
        {/* Example usage of FlipCard without the image */}
        <Background>
          <FlipCard
            frontImageSrc="/photos/Origins/Brazil.jpg"
            backTitle="Brazilian Coffee"
            backDescription="Brazil is recognized as the largest producer and exporter of coffee in the world.
          Characteristics notes:nuts and chocolate
          "
          />
          <FlipCard
            frontImageSrc="/photos/Origins/Columbia.webp"
            backTitle="Colombia Coffee"
            backDescription="Colombia is famed for producing vast quantities of incredibly high quality Arabica beans, and for good reason.
          Characteristics notes:nuts and chocolate"
          />
          <FlipCard
            frontImageSrc="/photos/Origins/Kenya.jpg"
            backTitle="Kenya Coffee"
            backDescription="Coffee beans from Kenya are known for their bright, bold flavour and wine-like acidity. It is grown at high altitudes on the slopes of Mount Kenya and in the country’s central and western regions.
          Characteristics notes: fruity taste with a wine-like acidity."
          />
          <FlipCard
            frontImageSrc="/photos/Origins/Indonesia.jpg"
            backTitle="Indonesian Coffee"
            backDescription="Indonesian coffee is often described as having an earthy taste, with moss, cedar, and even tobacco notes. Spicy – Many Indonesian coffee varieties have a spicy flavor with cinnamon, clove, and nutmeg notes."
          />
          <FlipCard
            frontImageSrc="/photos/Origins/El Salvador.jpg"
            backTitle="El Salvador Coffee "
            backDescription="El Salvador green coffee beans have mild and gentle flavor attributes. In most coffees, you'll be able to taste notes of nuts, chocolate, caramel, and fruit with a honey-like sweetness, balanced by a good body and mild acidity."
          />
          <FlipCard
            frontImageSrc="/photos/Origins/Ethiopia.jpg"
            backTitle="Ethiopian Coffee"
            backDescription="Ethiopia is renowned for its vibrant fruity and flowery characteristics. They often contain complex taste nuances, a light to medium body, and a stronger acidity. The processing technique significantly influences the coffee's final flavor. Longberry: The biggest and best-quality of the three."
          />
        </Background>

        {/* Add more FlipCard components as needed */}
      </div>
    </div>
  );
};

export default Origins;
