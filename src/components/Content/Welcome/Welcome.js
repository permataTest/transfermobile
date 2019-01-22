import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {

  handleNext = () => {
    localStorage.setItem("token", true);
  };
  render() {


    return (
      <div>
        <p>
          Halo, Selamat datang di{" "}
          <strong className="color-primary">PermataBank</strong>
        </p>
        <p>
          Silakan menekan tombol <strong>Lanjut</strong> untuk menyelesaikan
          Transfer
        </p>
        <div className="wrapper-button">
          <Link to="/resendcode">
            <button className="button button-primary" onClick={()=> this.handleNext()}>Lanjut</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
