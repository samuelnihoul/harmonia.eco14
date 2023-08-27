import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader/Loader";
const serviceOneImg = "/assets/images/man.jpg";
import HeaderOne from "../components/Header/HeaderOne";
import HeroVideo from "../components/Hero/HeroVideo";
import Welcome from "../components/WelcomeSection/Welcome";
import OurServices from "../components/OurServices";
import OurServices2 from '../components/OurServices2'
import FooterOne from "../components/Footer";
import CounterOne from "../components/Counter";
const StartupBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne type={''} />
      <HeroVideo data={''} />

      <Welcome title="What We Do" tagline="The way we work is harmonious">
        We run different Regenerative Finance applications:
        <ul><li>an emission reduction marketplace with arty NFT certificates,</li>
          <li>a proof of carbon removal token and ecosystem,</li>
          <li>more in development.</li>
        </ul>
      </Welcome>
      <OurServices2
        title="Our Focus"
        tagline="We help implementing your ambitions of ecoharmony."
        serviceImg={serviceOneImg}
      />
      <CounterOne type="wide" bg={undefined} />
      <OurServices title="About Us" tagline="Part of the solution" />
      <FooterOne />
    </Loader>
  );
};

export default StartupBusiness;
