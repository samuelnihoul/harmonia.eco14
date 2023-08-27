import React from "react";
import dataSocial from "../data/social-data.json";
// import the fontawesome component
const year = new Date().getFullYear();
const FooterCopyright = () => (
  <div className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <ul className="social-media">
            {dataSocial.filter((v, i) => i < 5).map((item) => (
              <li key={item.icon}>
                <a href={item.link}>
                  <i className={`icofont-${item.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="copy-right text-right">
            © {year} harmonia-eko. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default FooterCopyright;
