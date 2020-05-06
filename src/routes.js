import React from "react";
// import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import { Login } from "./components/AuthForm";
import { Signup } from "./components/AuthForm";
import Cart from "./components/CheckoutProcess/Cart";
import UserProfile from "./components/UserProfile";
import PurchaseProfile from "./components/CheckoutProcess/PurchaseProfile";
import Checkout from "./components/CheckoutProcess/Checkout";
import CheckoutSuccess from "./components/CheckoutProcess/CheckoutSuccess";
import { me } from "./store/user";
import { connect } from "react-redux";

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/cart/success" component={CheckoutSuccess} />
        <Route exact path="/cart/checkout" component={Checkout} />
        <Route exact path="/cart/pp" component={PurchaseProfile} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me())
});
export default withRouter(connect(null, mapDispatch)(Routes));
