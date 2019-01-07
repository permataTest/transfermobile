import React, { Component } from 'react';
import TitlePages from '../../components/UI/TitlePages/TitlePages';
import Auz from '../../hoc/Auz/Auz';
import BodyClass from 'react-body-classname';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/action/index';

import ResendCodeCOMP from '../../components/Content/ResendCode/ResendCode';

class ResendCode extends Component {
  componentDidMount(){
    this.props.getDataCode()
  }
  
  render() {
    return (
      <div>
        <TitlePages title={"welcome"} />
        <BodyClass className="no-transition welcome-page" >
          <Auz>
            <h1>Content Resend Code</h1>
            <h1>{this.props.verification}</h1>
            <ResendCodeCOMP/>
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
    console.log("===================================================", state.code);
    
    return{
      verification : state.code.verification
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResendCode)
