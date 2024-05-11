import React from "react";

import MainHeader from "../../components/MainHeader";
import "./landing.css";
import Experience from "../../components/Experience";
import Video from "../../components/Video";
import Headsets from "../../components/Headsets";
import Opinion from "../../components/Opinion";
import Footer from "../../components/Footer";
const Landing = () => {
  return (
    <div className="landing">
      <MainHeader />
      <Experience />
      <Video />
      <Headsets />
      <Opinion />
      <Footer/>
    </div>
  );
};

export default Landing;
