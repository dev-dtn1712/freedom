import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import {
  Topbar,
  Footer,
  App,
  Partner,
  Investor,
  About,
  Product,
  Career,
  CareerDetails,
  Contact,
} from './layouts';

class MainRoutes extends Component {
  renderRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/partners" component={Partner} />
        <Route exact path="/careers" component={Career} />
        <Route exact path="/careers/:id" component={CareerDetails} />
        <Route exact path="/investors" component={Investor} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    );
  }

  render() {
    return (
      <div className="w-100">
        <Topbar />
        <div className="w-100 main-container">
          {this.renderRoutes()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(MainRoutes);