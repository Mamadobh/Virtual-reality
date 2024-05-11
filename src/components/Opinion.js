import { React, useRef } from "react";
import { slider } from "../data";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Opinion = () => {
  const myRef = useRef(null);

  const scrollRight = () => {
    const distance_to_scrolll =
      myRef.current.firstElementChild.offsetWidth + 20.5;
    myRef.current.scrollLeft += distance_to_scrolll;
  };

  const scrollLeft = () => {
    const distance_to_scrolll =
      myRef.current.firstElementChild.offsetWidth + 20.5;
    myRef.current.scrollLeft -= distance_to_scrolll;
  };

  return (
    <section className="opinion">
      <div className="container opinion_container">
        <div className="top_content">
          <h2>What our clients say</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident deleniti. Eius soluta quisquam ex, nam dolor excepturi id
            accusamus.
          </p>
          <MdNavigateBefore className="icn_before icn" onClick={scrollLeft} />
          <MdNavigateNext className="icn icn_next" onClick={scrollRight} />
        </div>
        <div className="opinions_cards" ref={myRef}>
          {slider.map((slide, index) => {
            return (
              <div className="card" key={index}>
                <p className="message">{slide.message}</p>
                <div className="info">
                  <div className="client_avatar">
                    <img src={slide.image} alt="client_avatar" />
                  </div>
                  <div className="details">
                    <p className="name">{slide.name}</p>
                    <p className="email">{slide.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Opinion;
