import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/action/index';

class DetailBank extends Component {
componentDidMount(){
  this.props.getDataDetail()
}

  render() {
    return (
      <div>
        <TitlePages title={"welcome"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
          <h1>Content Detail Bank</h1>
          <h1>{this.props.Name}</h1>
          <h1>{this.props.Amount}</h1>
          <p>{JSON.stringify(this.props.BankList)}</p>
          <p>{JSON.stringify(this.props.AccountTO)}</p>
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getDataDetail : () => dispatch(actionTypes.getDetail())
  }
}

const mapStateToProps = state => {
  console.log("------------------", state.detailB);  
  return{
    Name      : state.detailB.name,
    Amount    : state.detailB.amount,

    BankList  : state.detailB.bankList,

    AccountTO : state.detailB.accountTO
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailBank);
