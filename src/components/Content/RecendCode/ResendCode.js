import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBackground from "../../../components/UI/SideBackground/SideBackground";
import Background from "../../../components/UI/Background/Background";
import Logo from "../../../components/UI/Logo/Logo";
import Card from "../../../components/UI/Card/Card";
import IconEnter from "../../../assets/images/icon/enter-otp.svg";
import IconError from "../../../assets/images/icon/error-otp.svg";
import Button from "../../UI/Button/Button";

class Welcome extends Component {

    state= {
        otp_code: "",
        status: false
    }

    validationCode = (event) => {

        let code = "123097"

        if (code === event.target.value  ) {
            this.setState( { 
                status: true 
            } );
        } else {
            this.setState( { status: false } );
        }
        
    }

  render() {

    let button = <Button type="Button" status={this.state.status} classButton={"button button-primary button-disabled"}>Konfirmasi Kode</Button>

    if (this.state.status) {
        button = (
            <Link to="/detailbank">
                <Button 
                    type="Button"
                    status={this.state.status}
                    classButton={"button button-primary"}>Konfirmasi Kode</Button>
            </Link>
        )
    }

    return (
      <div>
        <Background classBG={"bg-theme"}/>
        <div className="site-content">
          <Logo />
          <Card>
            <div className="container-content">

            {/* Icon */}
              <div className="resend-code-icon">
                <img
                  src={IconEnter}
                  alt="Enter OTP"
                  className="icon-initialize"
                />
                <img
                  src={IconError}
                  alt="Enter OTP"
                  className="icon-error-otp"
                />
              </div>

            {/* Title */}
              <div className="resend-code-title">
                <h5>
                  <span>6 Digit</span> Kode Verifikasi
                </h5>
              </div>

            {/* Error */}
              <div className="resend-code-error-otp">
                Maaf, kode yang kamu masukkan salah.
                <br />
                Mohon coba kembali.
              </div>

            {/* Form */}
              <div className="resend-code-form">
                <form
                  className="form"
                >
                  <div className="input-row">
                    <input
                      name="otp_code"
                      type="text" className="input-text" maxLength="6"
                      onChange={this.validationCode}
                    />
                  </div>
                </form>
              </div>

            {/* Button Resend & Close */}
              <div className="resend-code-button">
                <Link to="/resendcode" className="resend-button">
                  Kirim Ulang Kode
                </Link>
                <Link to="/" className="close-button">
                  Tombol Tutup
                </Link>
              </div>

            {/* Button Konfirmasi */}
              <div className="wrapper-button">
               {button}
              </div>

            </div>

            <SideBackground />
          </Card>
        </div>
      </div>
    );
  }
}

export default Welcome;
