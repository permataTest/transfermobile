import React, { Component } from "react";
import { connect } from "react-redux";

import LogoSuccess from "../../../../assets/images/icon/transfer-success.svg";

class TransferSuccess extends Component {
  render() {
    return (
      <div>
        <div className="transfer-icon">
          <img src={LogoSuccess} alt="Transfer Success" />
        </div>
        <div className="bank-account-name">
          <p>
            <strong>{this.props.AccountName},</strong>
            <br />
            Transaksi telah berhasil dilakukan ke
          </p>
        </div>
        <div className="bank-detail">
          <p>
            {this.props.BankName}
            <br />
            <strong>{this.props.AccountNo}</strong>
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
