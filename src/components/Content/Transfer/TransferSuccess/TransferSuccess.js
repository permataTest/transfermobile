import React, { Component } from 'react';
import {connect} from 'react-redux';

import SideBackground from '../../../../components/UI/SideBackground/SideBackground';
import Background from '../../../../components/UI/Background/Background';
import Logo from '../../../../components/UI/Logo/Logo';
import Card from '../../../../components/UI/Card/Card';
import LogoSuccess from '../../../../assets/images/icon/transfer-success.svg';

class TransferSuccess extends Component {

  render() {
    return (
      <div>
        <Background classBG={"bg-theme"} />
        <div className="site-content">
          <Logo />
          <Card>
            <div className="container-content">
              <div className="transfer-icon">
                <img src={LogoSuccess} alt="Transfer Success" />
              </div>
              <div className="bank-account-name">
                <p>
                  <strong>{this.props.AccountName},</strong><br />
                  Transaksi telah berhasil dilakukan ke
					      </p>
              </div>
              <div className="bank-detail">
                <p>
                  {this.props.BankName}<br />
                  <strong>{this.props.AccountNo}</strong>
                </p>
              </div>
            </div>
            <SideBackground />
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, '================');
  
  return{
    BankName    : state.getAcc.BankName,
    AccountName : state.getAcc.AccountName,
    AccountNo   : state.getAcc.AccountNo
}
}
export default connect(mapStateToProps,null)(TransferSuccess);
