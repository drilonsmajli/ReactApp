import React, { Component } from "react";
import "./Vision.scss";

import eye from "../../assets/eye.png";
import sky from "../../assets/sky.png";
import time from "../../assets/time.png";
import tower from "../../assets/tower.png";

class Vision extends Component {
  state = {
    btn1: true,
  };

  btn1Handler = () => {
    this.setState({ btn1: !this.state.btn1 });
  };

  render() {
    let showTextBtn1 = (
      <div className="posts">
        <div className="post">
          <div className="icon">
            <img src={time} alt="eye" />
            <h1>{this.props.en.vision.post1_title}</h1>
            <p>{this.props.en.vision.post1_content}</p>
            <h5>{this.props.en.vision.post1_info}</h5>
          </div>
        </div>
        <div className="post">
          <div className="icon">
            <img src={eye} alt="eye" />
            <h1>{this.props.en.vision.post2_title}</h1>
            <p>{this.props.en.vision.post2_content}</p>
            <h5>{this.props.en.vision.post2_info}</h5>
          </div>
        </div>

        <div className="post">
          <div className="icon">
            <img src={tower} alt="eye" />
            <h1>{this.props.en.vision.post3_title}</h1>
            <p>{this.props.en.vision.post3_content}</p>
            <h5>{this.props.en.vision.post3_info}</h5>
          </div>
        </div>
      </div>
    );
    return (
      <div className="vision">
        <img src={sky} alt="sky" />
        <div className="content">
          <h1>{this.props.en.vision.title}</h1>
          <p>{this.props.en.vision.content}</p>
        </div>
        <div className="vision__wrapper">
          <div className="vision__button">
            <button onClick={this.btn1Handler}>Our mission</button>
            <button onClick={this.btn1Handler}>Our work</button>
            <button onClick={this.btn1Handler}>Our impact</button>
            {this.state.btn1 ? (
              <div className="top">
                <i class="fa fa-chevron-right"></i>
              </div>
            ) : null}
            ;
          </div>

          {this.state.btn1 ? showTextBtn1 : null}
        </div>
      </div>
    );
  }
}
export default Vision;
