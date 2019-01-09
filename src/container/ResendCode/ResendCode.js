import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action/index';
import ContentRecendCode from '../../components/Content/RecendCode/ResendCode'

class ResendCode extends Component {
  componentDidMount(){
    this.props.getDataCode()
  }
  
  render() {
    return (
      <div>
        <TitlePages title={"Kode Verifikasi | Transfer to Mobile - Permata Bank"} />
        <BodyClass className="no-transition resend-code-page" >
          <Auz>
            <h1>Content Resend Code</h1>
            <h1>{this.props.verification}</h1>
            <ContentRecendCode />
          </Auz>
        </BodyClass>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getDataCode : () => dispatch(actionTypes.getCode())
  }
}

const mapStateToProps = state => { 
    return{
      verification : state.code.verification
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResendCode)
