import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Welcome extends Component {

  render() {
    return (
      <div>
        {enterRedirect}
        <p>
          Halo, Selamat datang di{" "}
          <strong className="color-primary">PermataBank</strong>
        </p>
        <p>
          Silakan menekan tombol <strong>Lanjut</strong> untuk menyelesaikan
          Transfer
        </p>
        <div className="wrapper-button" onKeyPress={(event) => this.enterPressed(event)}>
          <Link to="/resendcode" className="button button-primary">
            Lanjut
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
