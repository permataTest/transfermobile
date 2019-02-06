import React, { Component } from 'react';
import BodyClass from 'react-body-classname';
import { connect } from 'react-redux';

import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import * as actionTypes from '../../store/action/index';
import ContenDetailBank from '../../components/Content/DetailBank/DetailBank'
import PreLoader from '../../components/UI/PreLoader/PreLoader';
import Head from "../../components/UI/Head/Head";

class DetailBank extends Component {
componentDidMount(){
  if (!localStorage.getItem('token')) {
    this.props.history.push('/')
  } else {
    this.props.getDataDetail()
  }
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function() {
    window.history.go(1);
  };
}

  render() {
    return (
      <div>
        <TitlePages title={"Proses Transfer | Transfer to Mobile - Permata Bank"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
            <Head>
            {
              this.props.dataDetailBank.loading ? <PreLoader styled={{ display: "block", opacity: 1 }}/>: <ContenDetailBank dataDetail={this.props.dataDetailBank} dataAllProps={this.props}/>
            }
            </Head>
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataDetail: () => dispatch(actionTypes.getDetail())
  }
}

const mapStateToProps = state => {
  return {
    dataDetailBank: state.detailB
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBank);
