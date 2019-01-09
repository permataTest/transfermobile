import React, { Component } from 'react';
import BodyClass from 'react-body-classname';
import {connect} from 'react-redux';

import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import * as actionTypes from '../../store/action/index';
import ContenDetailBank from '../../components/Content/DetailBank/DetailBank'

class DetailBank extends Component {
componentDidMount(){
  this.props.getDataDetail()
}

  render() {
    return (
      <div>
        <TitlePages title={"Proses Transfer | Transfer to Mobile - Permata Bank"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
          {/* <h1>Content Detail Bank</h1>
          <h1>{this.props.Name}</h1>
          <h1>{this.props.Amount}</h1>
          <p>{JSON.stringify(this.props.BankList)}</p>
          <p>{JSON.stringify(this.props.AccountTO)}</p> */}
          <ContenDetailBank dataDetail={this.props.dataDetailBank}/>
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
  return{
    dataDetailBank: state.detailB
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailBank);
