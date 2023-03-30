import React from "react";
import Loader from "../components/Loader/Loader";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleAbout from "../components/PageTitle/PageTitleAbout";
import WhoWeAreSeven from "../components/WhoWeAre/WhoWeAreSeven";
import CounterOne from "../components/Counters/CounterOne";
import OurTeamTwo from "../components/Team/OurTeamTwo";
import FooterOne from "../components/Footer/FooterOne";

const AboutUs = () => (
  <Loader>
    <HeaderOne type={'white'} />
    <PageTitleAbout
      title="About Us"
      tagline="Driving innovation in voluntary carbon offsets since 2021"
    />
    <WhoWeAreSeven />
    <CounterOne type="wide" bg={'white'} />
    <OurTeamTwo title="MEET OUR TEAM" tagline="Together WE ARE STRONGER"  />
    <FooterOne />
  </Loader>
);

export default AboutUs;
