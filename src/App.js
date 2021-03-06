import React, { Component } from "react";
import Error404 from './container/404/Error404';
import ErrorBoundary from './hoc/ErrorBundary/ErrorBundary'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailBank from "./container/DetailBank/DetailBank";
import ResendCode from "./container/ResendCode/ResendCode";
import TransferSuccess from "./container/Transfer/TransferSuccess/TransferSuccess";
import TransferUnsuccess from "./container/Transfer/TransferUnsuccess/TranferUnsuccess";
import Welcome from "./container/Welcome/Welcome";
// import axios from 'axios'

class App extends Component {
  componentDidMount = () => {
    document.oncontextmenu = function(e) {
      console.log(e.button);
      if (e.button === 2) {
        e.preventDefault();
        return false;
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/detailbank" component={DetailBank} />
            <Route path="/resendcode" component={ResendCode} />
            <Route path="/transfersuccess" component={TransferSuccess} />
            <Route path="/transferunsuccess" component={TransferUnsuccess} />
            <Route component={Error404} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    );

  };
}

export default App;
