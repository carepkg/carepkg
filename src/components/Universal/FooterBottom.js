import React from "react";
import { IconContext } from "react-icons";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const FooterBottom = () => {
  const resources = [
    "e-Gift Certificate",
    "Classic Gift Card",
    "Create a Wedding Registry",
    "Returns",
    "Sale Policy",
    "Sales Tax Policy",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const aboutLinks = [
    "About carepkg",
    "Press Releases",
    "Affiliate Program",
    "Troubleshooting",
    "International Programs",
  ];
  return (
    <div id="footer-bottom-page">
      <div className="footer-links-main-container">
        <div className="footer-links-sub-container">
          <h3 className="bold">Resources</h3>
          {resources.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="footer-links-sub-container">
          <h3 className="bold">About carepkg</h3>
          {aboutLinks.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="footer-soc-media-logos">
          <IconContext.Provider value={{ size: "40px", margin: "0 8px" }}>
            <div className="soc-media-logo-wrapper">
              <FiFacebook />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "40px" }}>
            <div className="soc-media-logo-wrapper">
              <FiInstagram />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "40px" }}>
            <div className="soc-media-logo-wrapper">
              <FiTwitter />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "40px" }}>
            <div className="soc-media-logo-wrapper">
              <FiYoutube />
            </div>
          </IconContext.Provider>
        </div>
        <div className="footer-bottom-text-container">
          <h6>Brought to you by carepkg Inc.</h6>
          <h6 id="copyright-text">@carepkg.com - All Rights Reserved</h6>
        </div>
        <div className="footer-bottom-text-container">
          <h1 className="bold">carepkg</h1>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
