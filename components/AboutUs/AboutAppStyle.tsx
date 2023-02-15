import React, { forwardRef } from "react";
import dataAbout from "../../data/About/about-appstyle-data.json";
const img = "/images/slides/iPhone-big.png";

const AboutAppStyle = (props, ref) => {
  <section className="main-section white-bg" id="feature" >
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h1
            className="font-700"
            data-aos-delay={500}
            data-aos-duration={600}
            data-aos={"fade-up"}
          >
            Awesome Features
          </h1>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 float-sm-left">
            {dataAbout
              .filter((v, i) => i < 3)
              .map((feature, i) => (
                <div
                  className="feature-box text-center text-sm-start"
                  key={feature.id}
                  data-aos-delay={`${i + 3}00`}
                  data-aos={"fade-right"}
                  data-aos-easing={"ease-in-sine"}
                >
                  <div className="float-sm-left text-center text-sm-start">
                    <i className={`icofont-${feature.icon} font-40px red-icon`} />
                  </div>
                  <div className="float-none float-sm-right">
                    <h4 className="mt-0">{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div
          className="col-md-4 col-sm-12"
          data-aos-delay={200}
          data-aos={"fade-up"}
          data-aos-easing={"ease-in-sine"}
        >
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="pt-100 pb-100 float-sm-left">
            {dataAbout
              .filter((v, i) => i > 2)
              .map((feature, i) => (
                <div
                  className="feature-box-right text-center text-sm-end"
                  key={feature.id}
                  data-aos-delay={`${i + 3}00`}
                  data-aos={"fade-left"}
                  data-aos-easing={"ease-in-sine"}
                >
                  <div className="float-sm-right text-center text-sm-end">
                    <i className={`icofont-${feature.icon} font-40px red-icon`} />
                  </div>
                  <div className="float-sm-left">
                    <h4 className="mt-0">{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default AboutAppStyle;
