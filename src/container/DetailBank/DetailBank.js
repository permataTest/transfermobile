import React, { Component } from 'react';
import BodyClass from 'react-body-classname';
import {connect} from 'react-redux';

import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import * as actionTypes from '../../store/action/index';
import ContenDetailBank from '../../components/Content/DetailBank/DetailBank'
import PreLoader from '../../components/UI/PreLoader/PreLoader';

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
            {
              this.props.dataDetailBank.loading ? <PreLoader styled={{ display: "block", opacity: 1 }}/>: <ContenDetailBank dataDetail={this.props.dataDetailBank} dataAllProps={this.props}/>
            }
         
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
