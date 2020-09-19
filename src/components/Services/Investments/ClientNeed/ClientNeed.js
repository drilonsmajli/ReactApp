import React, { useEffect } from "react";
import "./ClientNeed.scss";
import Aos from "aos";

import img from "../../../../assets/layer2-1.png";

function ClientNeed(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-left" data-aos-duration="3000" className="ClientNeed">
      <div className="ClientNeed__wrapper">
        <div className="ClientNeed__img">
          <img src={img} alt="layer2" />
        </div>
        <div className="ClientNeed__text">
          <h1>{props.en.clientNeed.title}</h1>
          <p>{props.en.clientNeed.content}</p>
        </div>
      </div>
    </div>
  );
}
export default ClientNeed;
