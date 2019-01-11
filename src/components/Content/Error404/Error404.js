import React, { Component } from "react";
import Image404 from "../../../assets/images/background/404-banner.png";

class Error404 extends Component {
  render() {
    return (
      <div>
        <div className="image-banner">
          <img src={Image404} alt="404" width="320" />
        </div>
        <div className="ta-center">
          <p>
            <strong>Maaf,</strong>link sudah tidak berlaku.
          </p>
        </div>
      </div>
    );
  }
}

export default Error404;
