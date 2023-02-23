import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleWidget from "../components/PageTitle/PageTitleWidget";

import FooterOne from "../components/Footer/FooterOne";

const Career = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleWidget title="Careers" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 terms">
            <h2 className="font-700">Currently Opening</h2>
            Due to regulation, we cannot advertise any job vacancies at this time. However, in a growth spirit, we are open for spontaneous internship applications.
            You can send your resume at samuel@harmonia-eko.ooo.
            <h2 className="mt-80 font-700">Benefits</h2>
            <p>
              Benefits may include:

              - interest on result,
              - equity,
              - free carbon offsets,
              - opportunities to explore new roles and learn new skills,
              - full remote position,
              - flexible working hours.
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Career;
