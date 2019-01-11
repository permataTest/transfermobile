import React from "react";
import SideBackground from "../../../components/UI/SideBackground/SideBackground";
import Background from "../../../components/UI/Background/Background";
import Logo from "../../../components/UI/Logo/Logo";
import Card from "../../../components/UI/Card/Card";

const Head = props => (
  <div>
    <Background classBG={"bg-theme"} />
    <div className="site-content">
      <Logo />
      <Card>
        <div className="container-content">{props.children}</div>
        <SideBackground />
      </Card>
    </div>
  </div>
);

export default Head;
