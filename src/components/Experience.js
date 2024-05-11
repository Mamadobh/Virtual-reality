import React from "react";
import ImageExperience1 from "../images/exp-img1.png";
import ImageExperience2 from "../images/exp-img2.png";

const Experience = () => {
  return (
    <section className="experience">
      <div className="container experience_container">
        <div className="images_left ">
          <div className="image1">
            <img src={ImageExperience1} alt="image_experience" />
          </div>

          <div className="image2">
            <img src={ImageExperience2} alt="image_experience" />
          </div>
        </div>
        <div className="right_content">
          <h2> New Experience In Playing Games </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            illum minus asperiores aliquid dolore deserunt maiores ipsa iure.
            Hic, nam!
          </p>
          <button className="btn">Get it now</button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
