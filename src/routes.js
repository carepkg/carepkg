import React from "react";
// import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AllProducts from "./components/AllProducts";

class Routes extends React.Component {
  componentDidMount() {
    // this.props.loadInitialData();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/products" component={AllProducts} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
export default withRouter(Routes);
