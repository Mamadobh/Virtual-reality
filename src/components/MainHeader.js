import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/banner-img.png";

const MainHeader = () => {
  const images = [];
  for (let i = 1; i <= 4; i++) {
    images.push(require(`../images/avt${i}.png`));
  }

  return (
    <section className="main_header">
      <div className="container container_main_header">
        <div className="left_content">
          <h1>
            Let's Explore <br /> Three-Dimensional Visually.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            doloribus inventore harum cumque blanditiis minima.
          </p>
          <div className="start">
            <button className="btn">Get it now</button>
            <Link>Explore Device</Link>
          </div>
          <div className="members">
            <div className="avatar_imgs">
              {images.map((image, index) => {
                return <img key={index} src={image} alt={`avatar${index}`} />;
              })}
            </div>
            <p className="info">400k people online</p>
          </div>
        </div>
        <div className="image_right">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
