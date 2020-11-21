import React from "react";
import CarepkgHelp from "./CarepkgHelp";
import CarepkgNewsletter from "./CarepkgNewsletter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div id="landing-footer-main">
      <div className="landing-page-break"></div>
      <div id="info-footer">
        <CarepkgHelp />
        <CarepkgNewsletter />
      </div>
      <div className="landing-page-break"></div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
