import React from "react";
import { connect } from "react-redux";

const CompanyProfile = props => {
  const { company } = props;
  console.log(company);
  return (
    <div id="company-profile-page">
      <h1>{company.name}</h1>
      {/* <CoNavBar /> */}
    </div>
  );
};

const mapState = state => ({
  company: state.user
});
export default connect(mapState, null)(CompanyProfile);
