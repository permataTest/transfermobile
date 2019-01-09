import React, { Component } from 'react';

import Background from '../../UI/Background/Background'
import Logo from '../../UI/Logo/Logo'
import Card from '../../UI/Card/Card'
import Sidebackground from '../../UI/SideBackground/SideBackground'

class DetailBank extends Component {

  state = {
    inputClass1: 'input-row',
    inputClass2: 'popup-bank-data jsBankDataPopup',
    bankNameVal: ''
  }

  changeHandler = (event) => {
    this.setState({
      bankNameVal: event.target.value
    })
  }

  optionHandler = (event) => {
    event.stopPropagation()
    this.setState({
      bankNameVal: event.target.value,
      inputClass1: 'input-row has-input',
      inputClass2: 'popup-bank-data jsBankDataPopup show'
    })
  }

  clickformOpt = (event) => {
    console.log('masuk clcik form opt');
    event.stopPropagation()
    this.setState({
      inputClass1: 'input-row has-input',
      inputClass2: 'popup-bank-data jsBankDataPopup show'
    })
  }

  clickCard=() => {
    console.log('masuk clicl card');
    

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

      optionsForm = (
        <div className="popup-body">
          <div className="bank-list jsBankList">
            {
              listBank.map((option, key) => {
                let optionList = null
                if (key === 0) {
                  optionList =  <option className="item selected" key={option.code} value={option.bankName} onClick={(event) => this.optionHandler(event, option.code)}>{option.bankName}</option> 
                } else {
                  optionList =   <option className="item" key={option.code} value={option.bankName} onClick={(event) => this.optionHandler(event, option.code)}>{option.bankName}</option> 
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
                      <div className={this.state.inputClass1} onClick={(event) => this.clickformOpt(event) }>
                        <input name="bank_name" type="text" className="input-text input-search jsInputText jsBankName" id="keyInBank"  value={this.state.bankNameVal} onChange={(event) => this.changeHandler(event)}/>
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
                        { optionsForm }
                  
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-sm-12">
                      <div className="input-row">
                        <input name="account_number" type="text" className="input-text jsInputText jsAccountNumber" pattern="\d*" maxLength="24" id="accountNumber"  />
                        <label htmlFor="accountNumber" className="input-label">Nomor Rekening</label>
                      </div>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="error-message jsErrorMessageWrongAccount">Kamu memasukkan Nomor Rekening yang tidak dikenal</div>
                    </div>
                  </div>
                  <div className="bank-account-name jsBankAccountName">&nbsp;</div>
                  <div className="bank-reset-form">
                    <div className="not-this-account jsResetDetailBank">Bukan akun ini?</div>
                  </div>
                </form>
              </div>
              <div className="wrapper-button">
                <div className="button button-primary button-disabled jsButtonDetailBank" data-check="0" data-jsonurl="data/account-list.json">Lanjut</div>
              </div>
            </div>
            <Sidebackground />
          </Card>
        </div>>
      </div>
    )
  }
}

export default DetailBank;
