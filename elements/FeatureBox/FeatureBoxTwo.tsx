import React from "react";


const FeatureBoxTwo = ({ icon, title, color, children, index }) => (
  <div
    className="col-md-4 feature-box text-left mb-50 col-sm-6"
    data-aos={"fade-up"}
    data-aos-delay={`${index}00`}
    data-aos-duration={1000}
  >
    <div className="float-left">
      <i className={`icofont-${icon} font-50px default-icon`} />
    </div>
    <div className={"float-right " + (color === "white" ? "white-color" : "")}>
      <h5 className="mt-0 upper-case">{title}</h5>
      <p>{children}</p>
    </div>
  </div>
);

export default FeatureBoxTwo;
