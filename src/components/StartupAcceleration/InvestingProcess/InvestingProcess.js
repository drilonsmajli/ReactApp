import React, { useEffect } from "react";
import "./InvestingProcess.scss";
import Aos from "aos";

import img1 from "../../../assets/image17.png";
import img2 from "../../../assets/business.png";
import img3 from "../../../assets/image20.png";
import img4 from "../../../assets/image22.png";
import img5 from "../../../assets/meditation1.png";
import img6 from "../../../assets/investment.png";

function InvestingProcess(props) {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="InvestingProcess">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="InvestingProcess__wrapper"
      >
        <div className="post">
          <div className="post__img">
            <img src={img1} alt="img17" />
            <div className="post__content">
              <h3>{props.en.investingProcess.post1.title}</h3>
              <p>{props.en.investingProcess.post1.content}</p>
              <div className="post__icon">
                <img src={img2} alt="business" />
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post__img">
            <img src={img3} alt="img17" />
            <div className="post__content">
              <h3>{props.en.investingProcess.post2.title}</h3>
              <p>{props.en.investingProcess.post2.content}</p>
              <div className="post__icon">
                <img src={img6} alt="business" />
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post__img">
            <img src={img4} alt="img17" />
            <div className="post__content">
              <h3>{props.en.investingProcess.post3.title}</h3>
              <p>{props.en.investingProcess.post3.content}</p>
              <div className="post__icon">
                <img src={img5} alt="business" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InvestingProcess;
