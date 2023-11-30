import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleAbout from "../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../components/WhoWeAre/WhoWeAreSeven";
import CounterOne from "../components/Counter";
import OurTeamTwo from "../components/Team/OurTeamTwo";
import FooterOne from "../components/Footer";

const AboutUs = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleAbout
      title="About Us"
      tagline="Driving innovation in voluntary carbon offsets since 2021"
    />
    <WhoWeAreSeven />
    <CounterOne type="wide" bg={undefined} />
    <OurTeamTwo title="MEET OUR TEAM" tagline="Together WE ARE STRONGER" />
    <FooterOne />
  </Loader>
);

export default AboutUs;
