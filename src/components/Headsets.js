import React from "react";
import { data_image } from "../data";

const Headsets = () => {
  const images = [];
  for (let i = 1; i <= 4; i++) {
    images.push({
      data: data_image[i - 1],
      image: require(`../images/headset-${i}.png`),
    });
  }
  return (
    <section className="headset">
      <div className="container headset_container">
        <h2>Mixed Reality Headsets</h2>
        <div className="headset_gallery">
          {images.map(({ data, image }, index) => {
            return (
              <div className="image" key={index}>
                <img src={image} alt={`headset_image${index}`} />
                <div className="image_card">
                  <h4>{data.title}</h4>
                  <p>{data.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Headsets;
