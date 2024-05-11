import React, { useState } from "react";
import VideoImage from "../images/video-bg.png";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { AiFillPlayCircle } from "react-icons/ai";
const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="video">
      <div className="container video_container">
        <h3>Awesome experiences with virtual reality world</h3>
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NOK_M1Ib5F0"
          onClose={() => setIsOpen(false)}
        /> */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NOk_M1Ib5F0"
          onClose={() => setIsOpen(false)}
        />
        <div className="play_video">  
          <img src={VideoImage} alt="video_image" />
          <AiFillPlayCircle
            className="video_icn"
            onClick={() => setIsOpen((prevState) => !prevState)}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
