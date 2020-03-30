import React from "react";
// import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import SignIn from "./components/SignIn";

class Routes extends React.Component {
  componentDidMount() {
    // this.props.loadInitialData();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
export default withRouter(Routes);
