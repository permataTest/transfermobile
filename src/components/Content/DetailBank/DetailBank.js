import React, { Component } from 'react';

import Background from '../../UI/Background/Background'
import Logo from '../../UI/Logo/Logo'
import Card from '../../UI/Card/Card'
import Sidebackground from '../../UI/SideBackground/SideBackground'

class DetailBank extends Component {

  state = {
    inputClass1: 'input-row',
    inputClass2: 'popup-bank-data jsBankDataPopup',
    buttonClass: 'button button-primary button-disabled jsButtonDetailBank',
    showName: 'bank-account-name jsBankAccountName',
    errMsgClass: 'error-message jsErrorMessageWrongAccount',
    bankNameVal: '',
    rekeningVal: '',
    targerTransfer: null,
    display: 'none',
    verified: false,
    bankCode: 0
  }

  changeHandler = (event) => {
    this.setState({
      bankNameVal: event.target.value
    })
  }

  optionHandler = (event, code) => {
    console.log('ono', code);
    
    event.stopPropagation()
    this.setState({
      bankNameVal: event.target.value,
      inputClass1: 'input-row has-input',
      inputClass2: 'popup-bank-data jsBankDataPopup',
      bankCode: code
    })
  }

  clickformOpt = (event) => {
    event.stopPropagation()
    this.setState({
      inputClass1: 'input-row has-input',
      inputClass2: 'popup-bank-data jsBankDataPopup show'
    })
  }

  rekeningHandler = (event) => {
    this.setState({
      rekeningVal: event.target.value
    })

  }

  keyUpRekHanlder = (event) => {
    let rekVal = event.target.value.toString()
    if (rekVal.length >= 10) {
      this.setState({
        buttonClass: 'button button-primary jsButtonDetailBank'
      })
    }

  }

  clickCard = () => {
    if (this.state.inputClass1 === 'input-row has-input') {
      this.setState({
        inputClass2: 'popup-bank-data jsBankDataPopup'
      })
      if (this.state.bankNameVal === '') {
        this.setState({
          inputClass1: 'input-row',
        })
      }
    }
  }

  resetForm = () => {
    this.setState({
      inputClass1: 'input-row',
      inputClass2: 'popup-bank-data jsBankDataPopup',
      buttonClass: 'button button-primary button-disabled jsButtonDetailBank',
      showName: 'bank-account-name jsBankAccountName',
      bankNameVal: '',
      rekeningVal: '',
      targerTransfer: null,
      display: 'none',
      verified: false,
    })
  }

  checkAccount = () => {
    let found = false
    if (this.state.verified) {
      this.props.dataAllProps.history.push('/transfersuccess')
    }
    let listAccount = this.props.dataDetail.accountTO
    for (const key in listAccount) {
      if (listAccount[key].Bank_Code.toString() === this.state.bankCode.toString()) {
        if (listAccount[key].No_Account.toString() === this.state.rekeningVal.toString()) {
          this.setState({
            showName: 'bank-account-name jsBankAccountName show',
            targerTransfer: listAccount[key].Name,
            display: '',
            verified: true,
            errMsgClass: 'error-message jsErrorMessageWrongAccount'
          })
          found = true
        }
      }
    }

    
    if (!found) {
      this.setState({
        errMsgClass: 'error-message jsErrorMessageWrongAccount show'
      })
    }
  }

  render() {
    let dataProps = this.props.dataDetail
    let optionsForm = (
      <div className="popup-body">
        <div className="bank-list jsBankList">
          {/* <div className="item selected" data-code="001">Bank BCA</div>
          <div className="item" data-code="002">Bank Name</div> */}
        </div>
        <div className="error-message jsNoResultsBankList">Tidak ada hasil ditemukan</div>
      </div>
    )

    if (dataProps.bankList) {
      let listBank = []
      for (const key in dataProps.bankList) {
        listBank.push({
          code: key,
          bankName: dataProps.bankList[key]
        })
      }

      function compare(a,b) {
        if (a.bankName < b.bankName)
          return -1;
        if (a.bankName > b.bankName)
          return 1;
        return 0;
      }

      listBank.sort(compare)
      optionsForm = (
        <div className="popup-body">
          <div className="bank-list jsBankList">
            {
              listBank.map((option, key) => {
                let optionList = null
                if (key === 0) {
                  optionList = <option className="item selected" key={option.code} value={option.bankName} onClick={(event) => this.optionHandler(event, option.code)}>{option.bankName}</option>
                } else {
                  optionList = <option className="item" key={option.code} value={option.bankName} onClick={(event) => this.optionHandler(event, option.code)}>{option.bankName}</option>
                }

                return optionList
              })
            }
          </div>
          <div className="error-message jsNoResultsBankList">Tidak ada hasil ditemukan</div>
        </div>
      )
    }
    return (
      <div onClick={() => this.clickCard()}>
        <Background classBG={"bg-theme"} />
        <div className="site-content">
          <Logo />
          <Card>
            <div className="container-content">
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
                <form action="transfer-success.html" className="form jsFormDetailBank" autoComplete="off">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12" >
                      <div className={this.state.inputClass1} onClick={(event) => this.clickformOpt(event)}>
                        <input name="bank_name" type="text" className="input-text input-search jsInputText jsBankName" id="keyInBank" value={this.state.bankNameVal} onChange={(event) => this.changeHandler(event)} />
                        <input name="bank_code" type="hidden" className="jsBankCode" />
                        <label htmlFor="keyInBank" className="input-label">Masukkan Nama Bank</label>
                      </div>

                      <div className={this.state.inputClass2} data-jsonurl="data/bank-list.json">

                        {/* HEADER */}
                        <div className="popup-header">
                          <div className="bank-form-input">
                            <input type="text" name="bank_name" className="input-text jsSearchBank" />
                          </div>
                          <div className="popup-close jsCloseBankDataPopup">Close Icon</div>
                        </div>

                        {/* BODY */}
                        {optionsForm}

                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="input-row">
                        <input name="account_number" type="text" className="input-text jsInputText jsAccountNumber" pattern="\d*" maxLength="24" id="accountNumber" onChange={(event) => this.rekeningHandler(event)} onKeyUp={(event) => this.keyUpRekHanlder(event)} value={this.state.rekeningVal}/>
                        <label htmlFor="accountNumber" className="input-label">Nomor Rekening</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className={this.state.errMsgClass}>Kamu memasukkan Nomor Rekening yang tidak dikenal</div>
                    </div>
                  </div>
                  <div className={this.state.showName}>{this.state.targerTransfer} &nbsp;</div>
                  <div className="bank-reset-form" onClick={() => this.resetForm()}>
                    <div className="not-this-account jsResetDetailBank" onClick={() => this.resetForm()} style={{ display: this.state.display }}>Bukan akun ini?</div>
                  </div>
                </form>
              </div>
              <div className="wrapper-button">
                <div className={this.state.buttonClass} data-check="0" onClick={() => this.checkAccount()}>Lanjut</div>
              </div>
            </div>
            <Sidebackground />
          </Card>
        </div>
      </div>
    )
  }
}

export default DetailBank;
