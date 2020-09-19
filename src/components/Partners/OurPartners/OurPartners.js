import React, { useEffect } from "react";
import "./OurPartners.scss";
import Aos from "aos";

import img1 from "../../../assets/intel.png";
import img2 from "../../../assets/Adidas.png";
import img3 from "../../../assets/Sony.png";
import img4 from "../../../assets/Netsol.png";
import img5 from "../../../assets/Autodesk.png";
import img6 from "../../../assets/entente.png";
import img7 from "../../../assets/fujitsu.png";
import img8 from "../../../assets/boloba.png";
import img9 from "../../../assets/microsoft.png";
import img10 from "../../../assets/nvidia.png";
import img11 from "../../../assets/wbaf.png";
import img12 from "../../../assets/revolgy.png";
import img13 from "../../../assets/robolytix.png";
import img14 from "../../../assets/edge.png";

function OurPartners(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="Partners">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="partners__wrapper"
      >
        <div className="row">
          <div className="partner">
            <img src={img1} alt="img1" />
          </div>
          <div className="partner">
            <img src={img2} alt="img1" />
          </div>
          <div className="partner">
            <img src={img3} alt="img1" />
          </div>
          <div className="partner">
            <img src={img4} alt="img1" />
          </div>
          <div className="partner">
            <img src={img5} alt="img1" />
          </div>
        </div>
        <div className="row">
          <div className="partner">
            <img src={img10} alt="img1" />
          </div>
          <div className="partner">
            <img src={img6} alt="img1" />
          </div>
          <div className="partner">
            <img src={img7} alt="img1" />
          </div>
          <div className="partner">
            <img src={img8} alt="img1" />
          </div>
          <div className="partner">
            <img src={img9} alt="img1" />
          </div>
        </div>
        <div className="row">
          <div className="partner">
            <img src={img11} alt="img1" />
          </div>
          <div className="partner">
            <img src={img12} alt="img1" />
          </div>
          <div className="partner">
            <img src={img13} alt="img1" />
          </div>
          <div className="partner">
            <img src={img14} alt="img1" />
          </div>
        </div>

        <p>{props.en.partner.paragraph}</p>
      </div>
    </div>
  );
}
export default OurPartners;
