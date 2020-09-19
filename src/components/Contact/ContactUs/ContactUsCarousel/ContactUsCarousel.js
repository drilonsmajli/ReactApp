import React, { Component } from "react";
import "./ContactUsCarousel.scss";

import argentina from "../../../../assets/argentina.png";
import australia from "../../../../assets/australia.png";
import germany from "../../../../assets/germany.png";
import france from "../../../../assets/france.png";
import turkey from "../../../../assets/turkey.png";
import uk from "../../../../assets/uk.png";
import us from "../../../../assets/us.png";
import venezuela from "../../../../assets/venezuela.png";
import poland from "../../../../assets/poland.png";
import switzerland from "../../../../assets/switzerland.png";
import singapore from "../../../../assets/singapore.png";
import mexico from "../../../../assets/mexico.png";
import { Carousel } from "react-responsive-carousel";

class ContactUsCarousel extends Component {
  render() {
    return (
      <div className="ContactUsCarousel">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div className="ContactUsCarousel__row">
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Argentina</h4>
                  <img src={argentina} alt="argentina" />
                </div>
                <p>Atención al cliente 24/7 Buenos Aires:</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+54 11 5984 0780</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Australia</h4>
                  <img src={australia} alt="australia" />
                </div>
                <p>24/7 Support Countrywide:</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+61 1300 351 076</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Deutschland</h4>
                  <img src={germany} alt="germany" />
                </div>
                <p>8 bis 20 Uhr, Mo-Fr</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+49 89 21 094 807</p>
              </div>
            </div>
          </div>
          <div className="ContactUsCarousel__row">
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>France</h4>
                  <img src={france} alt="france" />
                </div>
                <p>9h à 21:30h lun-ven</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+33 9 75 18 70 39</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Türkiye</h4>
                  <img src={turkey} alt="turkey" />
                </div>
                <p>Ülke çapında: Pzt-Cu 9:00 - 19:00 arası</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>850 390 75 46</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>United Kingdom</h4>
                  <img src={uk} alt="uk" />
                </div>
                <p>24/7 Support:</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+44 20 7084 1810</p>
              </div>
            </div>
          </div>
          <div className="ContactUsCarousel__row">
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>United States</h4>
                  <img src={us} alt="us" />
                </div>
                <p>24/7 Support</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+1 4804638389</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Venezuela</h4>
                  <img src={venezuela} alt="Venezuela" />
                </div>
                <p>Venezuela</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+58 212 7719061</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Polska</h4>
                  <img src={poland} alt="poland" />
                </div>
                <p>Kraków: Pomoc techn. 24/7 po ang.</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+48 12 881 12 87</p>
              </div>
            </div>
          </div>
          <div className="ContactUsCarousel__row">
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Schweiz</h4>
                  <img src={switzerland} alt="Schweiz" />
                </div>
                <p>Basel: 8:00 - 20:00 Uhr, M-F</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+41 61 588 0224</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>Singapore</h4>
                  <img src={singapore} alt="Singapore" />
                </div>
                <p>24/7 Support</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+65 63494240</p>
              </div>
            </div>
            <div className="ContactUsCarousel__post">
              <div className="post__title">
                <div className="title">
                  <h4>México</h4>
                  <img src={mexico} alt="mexico" />
                </div>
                <p>Atención al cliente 24/7 Ciudad de México:</p>
              </div>
              <div className="ContactUsCarousel__contact__number">
                <p>+52 55 4631 2410</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default ContactUsCarousel;
