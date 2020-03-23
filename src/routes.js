import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";

class Routes extends React.Component {
  componentDidMount() {
    // this.props.loadInitialData();
  }
  render() {
    return (
      <Switch>
        {/* <Route exact path="/products" component={AllProducts} /> */}
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
export default withRouter(Routes);
