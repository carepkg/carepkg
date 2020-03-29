import React from "react";
// import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";

class Routes extends React.Component {
  componentDidMount() {
    // this.props.loadInitialData();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
export default withRouter(Routes);
