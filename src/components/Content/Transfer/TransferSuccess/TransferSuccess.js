import React, { Component } from 'react';
import SideBackground from '../../../../components/UI/SideBackground/SideBackground';
import Background from '../../../../components/UI/Background/Background';
import Logo from '../../../../components/UI/Logo/Logo';
import Card from '../../../../components/UI/Card/Card';
import LogoSuccess from '../../../../assets/images/icon/transfer-success.svg';

class TransferSuccess extends Component {
  render() {
    return (
      <div>
        <Background />
        <div className="site-content">
          <Logo />
          <Card>
            <div className="container-content">
              <div className="transfer-icon">
                <img src={LogoSuccess} alt="Transfer Success" />
              </div>
              <div className="bank-account-name">
                <p>
                  <strong>Abdy Salimin,</strong><br />
                  Transaksi telah berhasil dilakukan ke
					      </p>
              </div>
              <div className="bank-detail">
                <p>
                  Bank Central Asia (BCA)<br />
                  <strong>0293-2728-5743</strong>
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

export default TransferSuccess;
