import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/action/index';
import PreLoader from '../../UI/PreLoader/PreLoader';
import Button from '../../UI/Button/Button'

class DetailBank extends Component {

  state = {
    inputClassFormBank: 'input-row',
    inputClassListBank: 'popup-bank-data jsBankDataPopup',
    buttonClass: 'button button-primary button-disabled jsButtonDetailBank',
    showName: 'bank-account-name jsBankAccountName',
    errMsgClass: 'error-message jsErrorMessageWrongAccount',
    bankNameVal: '',
    rekeningVal: '',
    targerTransfer: null,
    display: 'none',
    verified: false,
    bankCode: 0,
    styleLoader: {},
    visited: false,
    dataListBank: [],
    buttonDisabed: "",
    chekAccountShow: false,
    index: 0
  }

  // event only number for account number
  formRekKeypress = evt => {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    let keyString = String.fromCharCode(key);
    let $numReg = /^[0-9]+$/;

    if (
      theEvent.which !== 8 &&
      (theEvent.which !== 13 && theEvent.keyCode !== 13)
    ) {
      if (!$numReg.test(keyString)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    }

  };

  // event when bank name value change in form list bank
  changeHandler = (event) => {
    let listBankForFiltering = this.props.dataDetail.bankList
    let arrListBankForFiltering = []
    let arrListBankForFiltered = []
    for (const key in listBankForFiltering) {
      arrListBankForFiltering.push({
        code: key,
        bankName: listBankForFiltering[key]
      })
    }

    arrListBankForFiltering.forEach(listBank => {
      if (listBank.bankName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
        arrListBankForFiltered.push(listBank)
      }
    });

    this.setState({
      bankNameVal: event.target.value,
      visited: true,
      dataListBank: arrListBankForFiltered,
      index: 0
    })
  }

  //event when click or choose value form option
  optionHandler = (event, code) => {
    event.stopPropagation()
    this.setState({
      bankNameVal: event.target.value,
      inputClassFormBank: 'input-row has-input',
      inputClassListBank: 'popup-bank-data jsBankDataPopup',
      bankCode: code,
      rekeningVal: ''
    })
  }


  //event when form option clicked
  clickformOpt = (event) => {
    event.stopPropagation()
    this.setState({
      inputClassFormBank: 'input-row has-input',
      inputClassListBank: 'popup-bank-data jsBankDataPopup show'
    })
  }

  //event when form option mobile clicked
  clickformOptMobile = (event) => {
    event.stopPropagation()
  }

  // event when account value change
  rekeningHandler = (event) => {
    let newRekVal = event.target.value.toString()
    let rekVal = newRekVal.split("-").join("")
    if (rekVal.length > 0) {
      rekVal = rekVal.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    this.setState({
      rekeningVal: rekVal
    })

  }


  // event when finish input account 
  keyUpRekHanlder = (event) => {
    let rekVal = event.target.value.toString()
    if (rekVal.length >= 10 && this.state.bankNameVal !== '') {
      this.setState({
        buttonClass: 'button button-primary jsButtonDetailBank',
        buttonDisabed: rekVal
      })
    } else {
      this.setState({
        buttonClass: 'button button-primary button-disabled jsButtonDetailBank',
        buttonDisabed: ''
      })
    }

  }

  // event click card
  clickCard = () => {
    if (this.state.inputClassFormBank === 'input-row has-input') {
      this.setState({
        inputClassListBank: 'popup-bank-data jsBankDataPopup'
      })
      if (this.state.bankNameVal === '') {
        this.setState({
          inputClassFormBank: 'input-row',
        })
      }
    }
  }

  // reset form
  resetForm = () => {
    let listBank = this.props.dataDetail.bankList
    let arrlistBank = []
    for (const key in listBank) {
      arrlistBank.push({
        code: key,
        bankName: listBank[key]
      })
    }


    this.setState({
      inputClassFormBank: 'input-row',
      inputClassListBank: 'popup-bank-data jsBankDataPopup',
      buttonClass: 'button button-primary button-disabled jsButtonDetailBank',
      showName: 'bank-account-name jsBankAccountName',
      bankNameVal: '',
      rekeningVal: '',
      targerTransfer: null,
      display: 'none',
      verified: false,
      dataListBank: arrlistBank
    })
  }


  //event for checkaccount
  checkAccount = () => {
    this.props.onAccountDetail(this.props.dataDetail.name, this.state.bankNameVal, this.state.rekeningVal)
    this.setState({
      styleLoader: { display: "block", opacity: 1 }
    })

    setTimeout(() => {
      this.setState({
        chekAccountShow: true,
        styleLoader: {}
      });
    }, 2000);


    // condition for checking account number with bank code
    let found = false
    if (this.state.verified) {
      let success = false
      let dataAccount = this.props.dataDetail.accountTO
      for(let key in  dataAccount) {
        if (this.state.rekeningVal.toString().split("-").join("") === dataAccount[key].No_Account.toString()) {
          if (this.state.bankCode.toString() === dataAccount[key].Bank_Code.toString()) {
            success = true
          }
        }
      }
      for (const key in this.props.dataDetail.accountTO) {
        console.log(this.props.dataDetail.accountTO[key].Bank_Code.toString(), 'ini code dari props')
        if (this.props.dataDetail.accountTO[key].Bank_Code.toString() === this.state.bankCode.toString()) {
          success = true
        }
      }


      if (success) {
        // this.props.dataAllProps.history.push('/transfersuccess')
        console.log('succes')
      } else {
        // this.props.dataAllProps.history.push('/transferunsuccess')
        console.log('errror');
      }
    }

    let listAccount = this.props.dataDetail.accountTO
    for (const key in listAccount) {
      if (listAccount[key].No_Account.toString() === this.state.rekeningVal.toString().split("-").join("")) {
        this.setState({
          showName: 'bank-account-name jsBankAccountName show',
          targerTransfer: listAccount[key].Name,
          display: '',
          verified: true,
          errMsgClass: 'error-message jsErrorMessageWrongAccount',
          chekAccountShow: false
        })
        found = true
      }
    }

    if (!found) {
      this.setState({
        errMsgClass: 'error-message jsErrorMessageWrongAccount show'
      })
    }
  }


  //event for preventing refresh on submit
  preventRefresh = (event) => {
    event.preventDefault()
  }


  //event enter input
  enterPressed = (event) => {
    var code = event.keyCode || event.which
    if (code === 13) {
      this.checkAccount()
    }
  }

  chooseBank = (event) => {
    let dataPropsBank = []
    let listBank = []
    let codeArrow = 'bawah'
    switch (event.which) {
      case 40:
        // console.log('ini ke bawah')
        if (this.state.inputClassListBank === 'popup-bank-data jsBankDataPopup show') {
          if (!this.state.visited) {
            dataPropsBank = this.props.dataDetail.bankList
            for (const key in dataPropsBank) {
              listBank.push({
                code: key,
                bankName: dataPropsBank[key]
              })
            }
          } else {
            listBank = this.state.dataListBank
          }

          if (this.state.index < listBank.length) {
            this.setState(prevState => ({
              bankNameVal: listBank[this.state.index].bankName,
              index: prevState.index + 1
            }))
          }
        }
        break;
      case 38:
        if (this.state.inputClassListBank === 'popup-bank-data jsBankDataPopup show') {
          if (!this.state.visited) {
            dataPropsBank = this.props.dataDetail.bankList
            for (const key in dataPropsBank) {
              listBank.push({
                code: key,
                bankName: dataPropsBank[key]
              })
            }
          } else {
            listBank = this.state.dataListBank
          }

          if (codeArrow === 'bawah') {
            codeArrow = 'atas'
            if (this.state.index >= 2) {
              this.setState(prevState => ({
                bankNameVal: listBank[this.state.index - 2].bankName,
                index: prevState.index - 1
              }))
            }
          } else {
            this.setState(prevState => ({
              bankNameVal: listBank[this.state.index].bankName,
              index: prevState.index - 1
            }))
          }
        }
        // console.log('ini ke atas')
        // let dataPropsBank = []
        // let listBank = []

        break;
      case 13:
        if (this.state.inputClassFormBank === 'input-row has-input') {
          this.setState({
            inputClassListBank: 'popup-bank-data jsBankDataPopup'
          })
          if (this.state.bankNameVal === '') {
            this.setState({
              inputClassFormBank: 'input-row',
            })
          }
        }
        break;
      case 27:
        if (this.state.inputClassFormBank === 'input-row has-input') {
          this.setState({
            inputClassListBank: 'popup-bank-data jsBankDataPopup'
          })
          if (this.state.bankNameVal === '') {
            this.setState({
              inputClassFormBank: 'input-row',
            })
          }
        }
        break;
      case 9:
        if (this.state.inputClassFormBank === 'input-row has-input') {
          this.setState({
            inputClassListBank: 'popup-bank-data jsBankDataPopup'
          })
          if (this.state.bankNameVal === '') {
            this.setState({
              inputClassFormBank: 'input-row',
            })
          }
        }
        break;
      default:
          this.setState({
            inputClassFormBank: 'input-row has-input',
            inputClassListBank: 'popup-bank-data jsBankDataPopup show'
          })
        break;
    }
  }

  render() {
    let dataProps = this.props.dataDetail
    let dataPropsBank = null
    if (!this.state.visited) {
      dataPropsBank = this.props.dataDetail.bankList
    } else {
      dataPropsBank = this.state.dataListBank
    }

    let optionsForm = (
      <div className="popup-body">
        <div className="bank-list jsBankList">
          {/* <div className="item selected" data-code="001">Bank BCA</div>
          <div className="item" data-code="002">Bank Name</div> */}
        </div>
        <div className="error-message jsNoResultsBankList">Tidak ada hasil ditemukan</div>
      </div>
    )

    if (dataPropsBank) {
      let listBank = []
      if (!this.state.visited) {
        for (const key in dataPropsBank) {
          listBank.push({
            code: key,
            bankName: dataPropsBank[key]
          })
        }
      } else {
        listBank = dataPropsBank
      }

      if (listBank.length > 0) {
        optionsForm = (
          <div className="popup-body">
            <div className="bank-list jsBankList">
              {
                listBank.map((option, key) => {
                  let optionList = null
                  if (key === 0) {
                    optionList = <option
                      className="item selected"
                      key={option.code}
                      value={option.bankName}
                      onClick={(event) => this.optionHandler(event, option.code)}
                    >
                      {option.bankName}
                    </option>
                  } else {
                    optionList = <option
                      className="item"
                      key={option.code}
                      value={option.bankName}
                      onClick={(event) => this.optionHandler(event, option.code)}
                    >
                      {option.bankName}
                    </option>
                  }

                  return optionList
                })
              }
            </div>
          </div>
        )
      } else {
        optionsForm = <option style={{ color: 'red', fontSize: 12, textAlignLast: 'center' }}>Tidak ada hasil ditemukan</option>
      }
    }


    return (
      <div onClick={() => this.clickCard()}>
        <p className="top-sub-head">
          <strong>{dataProps.name}</strong> mengirimkan uang sebesar
				      </p>
        <p className="amount">
          <strong className="color-primary">Rp {dataProps.amount.toLocaleString()}</strong>
        </p>
        <p>
          Silakan pilih bank dan rekening yang diinginkan untuk menyelesaikan proses transfer
				      </p>
        <div className="detail-bank-form">
          <form action="transfer-success.html" className="form jsFormDetailBank" autoComplete="off" onSubmit={this.preventRefresh}>
            <div className="row">
              <div className="col-lg-6 col-sm-12" >
                <div className={this.state.inputClassFormBank} onClick={(event) => this.clickformOpt(event)}>
                  <input
                    name="bank_name"
                    type="text"
                    className="input-text input-search jsInputText jsBankName"
                    id="keyInBank"
                    value={this.state.bankNameVal}
                    onChange={(event) => this.changeHandler(event)}
                    onKeyDown={event => this.chooseBank(event)}
                  />
                  <input name="bank_code" type="hidden" className="jsBankCode" />
                  <label htmlFor="keyInBank" className="input-label">Masukkan Nama Bank</label>
                </div>

                <div className={this.state.inputClassListBank} data-jsonurl="data/bank-list.json">

                  {/* HEADER MOBILE */}
                  <div className="popup-header">
                    <div className="bank-form-input">
                      <input
                        type="text"
                        name="bank_name"
                        className="input-text jsSearchBank"
                        value={this.state.bankNameVal}
                        onClick={(event) => this.clickformOptMobile(event)}
                        onChange={(event) => this.changeHandler(event)} />
                    </div>
                    <div className="popup-close jsCloseBankDataPopup">Close Icon</div>
                  </div>

                  {/* BODY */}
                  {optionsForm}

                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="input-row">
                  <input
                    name="account_number"
                    type="text"
                    className="input-text jsInputText jsAccountNumber"
                    pattern="\d*"
                    maxLength="24"
                    id="accountNumber"
                    onChange={(event) => this.rekeningHandler(event)}
                    onKeyUp={(event) => this.keyUpRekHanlder(event)}
                    onKeyDown={(event) => this.enterPressed(event)}
                    value={this.state.rekeningVal} />
                  <label htmlFor="accountNumber" className="input-label">Nomor Rekening</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className={this.state.errMsgClass}>Kamu memasukkan Nomor Rekening yang tidak dikenal</div>
              </div>
            </div>
            {
              this.state.chekAccountShow ? (
                <div>
                  <div className={this.state.showName}>{this.state.targerTransfer} &nbsp;</div>
                  <div className="bank-reset-form" onClick={() => this.resetForm()}>
                    <div className="not-this-account jsResetDetailBank" onClick={() => this.resetForm()} style={{ display: this.state.display }}>Bukan akun ini?</div>
                  </div>
                </div>
              ) : null
            }
          </form>
        </div>
        <div className="wrapper-button">
          <Button
            clicked={() => this.checkAccount()}
            classButton={this.state.buttonClass}
            btnDisabled={!this.state.buttonDisabed}
            onKeyPress={(event => this.formRekKeypress(event))}> Lanjut </Button>
          {/* // <div className={this.state.buttonClass}  onClick={() => this.checkAccount()}>Lanjut</div> */}
        </div>
        <PreLoader styled={this.state.styleLoader} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAccountDetail: (targerTransfer, bankNameVal, rekeningVal) => dispatch(actions.getOnAccountDetail(targerTransfer, bankNameVal, rekeningVal))
  }
}

export default connect(null, mapDispatchToProps)(DetailBank);
