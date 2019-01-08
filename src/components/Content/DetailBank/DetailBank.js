import React, { Component } from 'react';

import Background from '../../UI/Background/Background'
import Logo from '../../UI/Logo/Logo'
import Card from '../../UI/Card/Card'
import Sidebackground from '../../UI/SideBackground/SideBackground'

class DetailBank extends Component {
  render() {
    return (
      <div>
        <Background classBG={"bg-theme"} />
        <div className="site-content">
          <Logo />
          <Card>
            <div className="container-content">
              <p class="top-sub-head">
                <strong>Yogie Christian</strong> mengirimkan uang sebesar
				      </p>
              <p class="amount">
                <strong class="color-primary">Rp 5,000,000.</strong>
              </p>
              <p>
                Silakan pilih bank dan rekening yang diinginkan untuk menyelesaikan proses transfer
				      </p>
              <div class="detail-bank-form">
                <form action="transfer-success.html" class="form jsFormDetailBank" autocomplete="off">
                  <div class="row">
                    <div class="col-lg-6 col-sm-12">
                      <div class="input-row">
                        <input name="bank_name" type="text" class="input-text input-search jsInputText jsBankName" id="keyInBank" value="" />
                        <input name="bank_code" type="hidden" class="jsBankCode" />
                        <label for="keyInBank" class="input-label">Masukkan Nama Bank</label>
                      </div>
                      <div class="popup-bank-data jsBankDataPopup" data-jsonurl="data/bank-list.json">
                        <div class="popup-header">
                          <div class="bank-form-input">
                            <input type="text" name="bank_name" class="input-text jsSearchBank" />
                          </div>
                          <div class="popup-close jsCloseBankDataPopup">Close Icon</div>
                        </div>
                        <div class="popup-body">
                          <div class="bank-list jsBankList">
                            <div class="item selected" data-code="001">Bank Name</div>
                            <div class="item" data-code="002">Bank Name</div>
                          </div>
                          <div class="error-message jsNoResultsBankList">Tidak ada hasil ditemukan</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      <div class="input-row">
                        <input name="account_number" type="text" class="input-text jsInputText jsAccountNumber" pattern="\d*" maxlength="24" id="accountNumber" value="" />
                        <label for="accountNumber" class="input-label">Nomor Rekening</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-sm-12">
                      <div class="error-message jsErrorMessageWrongAccount">Kamu memasukkan Nomor Rekening yang tidak dikenal</div>
                    </div>
                  </div>
                  <div class="bank-account-name jsBankAccountName">&nbsp;</div>
                  <div class="bank-reset-form">
                    <div class="not-this-account jsResetDetailBank">Bukan akun ini?</div>
                  </div>
                </form>
              </div>
              <div class="wrapper-button">
                <div class="button button-primary button-disabled jsButtonDetailBank" data-check="0" data-jsonurl="data/account-list.json">Lanjut</div>
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
