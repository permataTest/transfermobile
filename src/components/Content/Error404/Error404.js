import React, { Component } from "react";
import SideBackground from "../../../components/UI/SideBackground/SideBackground";
import Background from "../../../components/UI/Background/Background";
import Logo from "../../../components/UI/Logo/Logo";
import Card from "../../../components/UI/Card/Card";
import Image404 from "../../../assets/images/background/404-banner.png"

class Error404 extends Component {
  render() {
    return (
      <div>
        <Background classBG={"bg-theme"} />
        <div className="site-content">
          <Logo />
          <Card>
            <div className="container-content">
              <div className="image-banner">
                <img src={Image404} alt="404" width="320" />
              </div>
              <div className="ta-center">
                <p>
                  <strong>Maaf,</strong>link sudah tidak berlaku.
                </p>
              </div>
            </div>
            <SideBackground />
          </Card>
        </div>
      </div>
    );
  }
}

export default Error404;
