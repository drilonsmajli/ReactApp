import React from "react";
import SponsorCarousel from "./SponsorCarousel";
import "./Sponsor.scss";
function Sponsor(props) {
  return (
    <div className="sponsor">
      <div className="content">
        <h1>{props.en.sponsor}</h1>
      </div>
      <div className="sponsor__wrapper">
        <div className="img">
          <SponsorCarousel />
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
