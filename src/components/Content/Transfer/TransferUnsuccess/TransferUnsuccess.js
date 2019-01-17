import React, { Component } from 'react';
import { connect } from 'react-redux'

import LogoUnsuccess from '../../../../assets/images/icon/transfer-unsuccessful.svg';
import Button from '../../../UI/Button/Button';

class TransferUnsuccess extends Component {
    state = {
        button  : "button button-primary"
    }

    Konfirmation = () => {
        this.props.transferUnsuccess.history.push("/detailbank");
    }

    render() {
        return (
            <div>
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
                                <Button
                                    type="Button"
                                    classButton={this.state.button}
                                    clicked={this.Konfirmation}>
                                    Ulangi Proses
                                </Button>
                                 {/* <Link to="/detailbank" className="button button-primary">Ulangi Proses</Link> */}
                            </div>
                        </div>
                        
        )}
}

const mapStateToProps = state => {
  return {
    receiver: state.getAcc.AccountName
  };
};

export default connect(mapStateToProps)(TransferUnsuccess);
