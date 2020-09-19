import React from "react";

import "./OurTeam.scss";
import emma from "../../../assets/emma.png";
import monica from "../../../assets/monica.png";
import evan from "../../../assets/evan.png";
import sarah from "../../../assets/sarah.png";
import antonio from "../../../assets/antonio.png";
import violet from "../../../assets/violet.png";
import antoine from "../../../assets/antoine.png";
import noah from "../../../assets/noah.png";
import wave from "../../../assets/wave.png";
import OurTeamCarousel from "./OurTeamCarousel/OurTeamCarousel";

function OurTeam(props) {
  const ourteam = (
    <React.Fragment>
      <div className="row">
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={emma} alt="emma" />
                </div>
                <div className="chart">
                  <h4>Emma</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={monica} alt="monica" />
                </div>
                <div className="chart">
                  <h4>Monica</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={evan} alt="evan" />
                </div>
                <div className="chart">
                  <h4>Evan</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={sarah} alt="liquid" />
                </div>
                <div className="chart">
                  <h4>Sarah</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={antonio} alt="emma" />
                </div>
                <div className="chart">
                  <h4>Antonio</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={violet} alt="monica" />
                </div>
                <div className="chart">
                  <h4>Violet</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={antoine} alt="evan" />
                </div>
                <div className="chart">
                  <h4>Jake</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image__post">
            <div className="top__post"></div>
            <div className="post__offer">
              <div className="wave">
                <img src={wave} alt="wave" style={{ width: "100%" }} />
                <div className="icons">
                  <img src={noah} alt="liquid" />
                </div>
                <div className="chart">
                  <h4>Noah</h4>
                  <p>{props.en.ourTeam.job}</p>
                  <div className="chart__icons">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  return (
    <div className="OurTeam">
      <div className="OurTeam__wrapper">
        {window.matchMedia("(max-width: 1024px)").matches ? (
          <OurTeamCarousel en={props.en} />
        ) : (
          ourteam
        )}
      </div>
    </div>
  );
}
export default OurTeam;
