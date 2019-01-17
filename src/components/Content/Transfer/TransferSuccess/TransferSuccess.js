import React, { Component } from "react";
import { connect } from "react-redux";

import LogoSuccess from "../../../../assets/images/icon/transfer-success.svg";

// 3790046900

class TransferSuccess extends Component {

  render() {
    let acountNo    = localStorage.getItem('rekening')
    let bankName    = localStorage.getItem('namaB')
    let accountName = localStorage.getItem('accountN')
    if (this.props.AccountNo){
      localStorage.setItem('rekening', this.props.AccountNo)
      localStorage.setItem('namaB', this.props.BankName)
      localStorage.setItem('accountN', this.props.AccountName)
    }
    // if (sessionStorage.clickcount) {
    //   sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    // } else {
    //   sessionStorage.clickcount = 1;
    // }
    // document.getElementById("result").innerHTML = "You have clicked the button " +
    // sessionStorage.clickcount + " time(s) in this session.";

    return (
      <div>
        <div className="transfer-icon">
          <img src={LogoSuccess} alt="Transfer Success" />
        </div>
        <div className="bank-account-name">
          <p>
          {
            this.props.AccountName? <strong>{this.props.AccountName},</strong>: <strong>{accountName},</strong>
          }
            <br />
            Transaksi telah berhasil dilakukan ke
          </p>
        </div>
        <div className="bank-detail">
          <p>
            {
              this.props.BankName? <span> {this.props.BankName} </span>: <span>{bankName}</span>
            }
            <br />
            {
              this.props.AcountNo? <strong> {this.props.AccountNo} </strong>: <strong>{acountNo}</strong>
            }
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    BankName: state.getAcc.BankName,
    AccountName: state.getAcc.AccountName,
    AccountNo: state.getAcc.AccountNo
  };
};
export default connect(
  mapStateToProps,
  null
)(TransferSuccess);
