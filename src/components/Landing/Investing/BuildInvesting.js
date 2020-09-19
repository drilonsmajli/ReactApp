import React, { useEffect } from "react";
import "./BuildInvesting.scss";
import Aos from "aos";

import playButton from "../../../assets/playbutton.png";
import happy from "../../../assets/happy.png";
import vbi from "../../../assets/video-build-investing.png";

function BuildInvesting(props) {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <div className="build-investing">
      <div className="title">
        <h1>{props.en.buildinvesting.title}</h1>
        <p>{props.en.buildinvesting.content}</p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="videos"
      >
        <div className="video__wrapper">
          <div className="video1">
            <img src={vbi} alt="vbi" />
            <div className="playbutton">
              <img src={playButton} alt="playbutton" />
            </div>
          </div>
          <div className="video2">
            <img src={happy} alt="happy" />
            <div className="playbutton">
              <img src={playButton} alt="playbutton" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildInvesting;
