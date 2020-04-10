import React from "react";
import { connect } from "react-redux";

const CompanyProfile = props => {
  const { company } = props;
  const pkgs = company.packages;
  return (
    <div id="company-profile-page">
      <h1>{company.name}</h1>
      {pkgs
        ? pkgs.map(pkg => {
            return (
              <div className="company-profile-pkg">
                <h3>{pkg.name}</h3>
                {pkg.packageLineItems.map(item => {
                  return (
                    <img
                      src={item.product.image}
                      className="company-profile-prod-img"
                    />
                  );
                })}
              </div>
            );
          })
        : null}
    </div>
  );
};

const mapState = state => ({
  company: state.user
});
export default connect(mapState, null)(CompanyProfile);
