import React, { Component } from "react";
import { connect } from "react-redux";
import LogoUnsuccess from "../../../../assets/images/icon/transfer-unsuccessful.svg";
import { Link } from "react-router-dom";

class TransferUnsuccess extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div>
        <div className="transfer-icon">
          <img src={LogoUnsuccess} alt="Transfer Success" />
        </div>
        <div className="bank-account-name">
          <p>
            <strong>{this.props.receiver}</strong>
            <br />
            Kamu tidak berhasil melakukan transfer
          </p>
        </div>
        <div className="wrapper-button">
          <Link to="/detailbank" className="button button-primary">
            Ulangi Proses
          </Link>
        </div>
      </div>
    );
  }
=======

    render() {
        return (
            <div>
                <Background classBG={"bg-theme"} />
                <div className="site-content">
                    <Logo />
                    <Card>
                        <div className="container-content">
                            <div className="transfer-icon">
                                <img src={LogoUnsuccess} alt="Transfer Success" />
                            </div>
                            <div className="bank-account-name">
                                <p>
                                    <strong>{this.props.receiver}</strong><br />
                                    Kamu tidak berhasil melakukan transfer
					            </p>
                            </div>
                            <div className="wrapper-button">
                                <Link to="/detailbank" className="button button-primary">Ulangi Proses</Link>
                            </div>
                        </div>
                        <SideBackground />
                    </Card>
                </div>
            </div>
        )
    }
>>>>>>> ref button detail
}

const mapStateToProps = state => {
  return {
    receiver: state.getAcc.AccountName
  };
};

export default connect(mapStateToProps)(TransferUnsuccess);
