import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPackagesWithProductThunk } from "../store/packages";
import PackageCard from "./PackageCard";

const PackagesWithProduct = props => {
  useEffect(() => {
    props.fetchPackagesWithProduct(productId);
  }, []);
  const { productId, packages } = props;
  let numFillerPackages = 0;
  if (packages.length < 5) numFillerPackages = 5 - packages.length;

  return (
    <div className="pkgs-with-prod-container">
      <h1>Browse packages containing this product</h1>
      <div className="browse-pkgs-container">
        {packages.map(pkg => (
          <PackageCard pkg={pkg} />
        ))}
        {numFillerPackages &&
          Array(numFillerPackages)
            .fill("")
            .map(filler => <div className="filler-card"></div>)}
      </div>
    </div>
  );
};
const mapState = state => ({
  packages: state.packages
});
const mapDispatch = dispatch => ({
  fetchPackagesWithProduct: productId =>
    dispatch(getPackagesWithProductThunk(productId))
});
export default connect(mapState, mapDispatch)(PackagesWithProduct);
