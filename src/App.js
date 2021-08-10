import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Shopping from "./Container/Shopping/Shopping";
import Checkout from "./Container/Checkout/Checkout";
import Account from "./Container/Account/Account";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Shopping} />

              <Route path="/checkout" component={Checkout} />

              <Route path="/account" component={Account} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
