import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconEnter from "../../../assets/images/icon/enter-otp.svg";
import IconError from "../../../assets/images/icon/error-otp.svg";
import Button from "../../UI/Button/Button";
import PreLoader from "../../UI/PreLoader/PreLoader";

class ResendCode extends Component {
  state = {
    otp_code: "",
    loader: {},
    button: "button button-primary button-disabled",
    error: "resend-code-error-otp",
    imageSuccess: "icon-initialize",
    imageError: "icon-error-otp"
  };

  OTPkeypress = evt => {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    let keyString = String.fromCharCode(key);
    let $numReg = /^[0-9]+$/;

    if (evt.key === 'Enter'){
      console.log("Di enter");
    }
    // if (
    //   theEvent.which !== 8 &&
    //   (theEvent.which !== 13 && theEvent.keyCode !== 13)
    // ) 
    
      if (!$numReg.test(keyString)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    
  };

  OTPkeyup = evt => {
    let code = evt.target.value;
    if (code.length === 6) {
      this.setState({
        button: "button button-primary",
        otp_code: code
      });
    } else {
      this.setState({
        button: "button button-primary button-disabled",
        otp_code: ""
      });
    }
  };

  handleClickShowLoader() {
    this.setState({
      loader: { display: "block", opacity: 1 }
    });

    setTimeout(() => {
      this.setState({
        loader: {}
      });
    }, 2000);
  }

  OTPverfivicationCode = () => {

    let otp_input = this.state.otp_code;
    let otp = this.props.code;

    if (this.state.button !== "button button-primary button-disabled") {
      this.handleClickShowLoader();
      if (otp_input.toString() === otp.toString()) {
        this.props.history.push("/detailbank");
      } else {
        this.setState({
          error: "resend-code-error-otp show",
          imageSuccess: "icon-initialize hide",
          imageError: "icon-error-otp show"
        });
      }
    }
  };

  preventRefresh = (event) => {
    event.preventDefault()
  }

  enterTrigered = (event) => {
    if(event.keyCode === 13 || event.which === 13) {
      this.OTPverfivicationCode()
    }
  }

  render() {
    return (
      <div>
        {/* Icon */}
        <div className="resend-code-icon">
          <img
            src={IconEnter}
            alt="Enter OTP"
            className={this.state.imageSuccess}
          />
          <img
            src={IconError}
            alt="Enter OTP"
            className={this.state.imageError}
          />
        </div>

        {/* Title */}
        <div className="resend-code-title">
          <h5>
            <span>6 Digit</span> Kode Verifikasi
          </h5>
        </div>

        {/* Error */}
        <div className={this.state.error}>
          Maaf, kode yang kamu masukkan salah.
          <br />
          Mohon coba kembali.
        </div>

        {/* Form */}
        <div className="resend-code-form">
          <form className="form" autoComplete="off" onSubmit={this.preventRefresh}>
            <div className="input-row">
              <input
                name="otp_code"
                type="text"
                className="input-text"
                maxLength="6"
                pattern="\d*"
                autoComplete="off"
                onKeyPress={this.OTPkeypress}
                onKeyUp={this.OTPkeyup}
                onKeyDown={this.enterTrigered}
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
          <Button
            type="Button"
            classButton={this.state.button}
            clicked={this.OTPverfivicationCode}
            btnDisabled={!this.state.otp_code}
          >
            Konfirmasi Kode
          </Button>
        </div>
        <PreLoader styled={this.state.loader} />
      </div>
    );
  }
}

export default ResendCode;
