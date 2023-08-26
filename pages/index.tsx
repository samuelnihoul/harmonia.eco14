import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader/Loader";
import dataStartup from "../data/Slider/startup-business-data.json";
const serviceOneImg = "/assets/images/man.jpg";
import HeaderOne from "../components/Header/HeaderOne";
import HeroVideo from "../components/Hero/HeroVideo";
import Welcome from "../components/WelcomeSection/Welcome";
import OurServices from "../components/OurServices/OurServices";
import OurServicesTwo from "../components/OurServices/OurServicesTwo";
import FooterOne from "../components/FooterOne";
import CounterOne from "../components/Counter";
const StartupBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne type={undefined} />
      <HeroVideo data={dataStartup} />

      <Welcome title="What We Do" tagline="The way we work is harmonious">
        We run different Regenerative Finance applications:
        <ul><li>an emission reduction marketplace with arty NFT certificates,</li>
          <li>a proof of carbon removal token and ecosystem,</li>
          <li>more in development.</li>
        </ul>
      </Welcome>
      <OurServices
        title="Our Focus"
        tagline="We help implementing your ambitions of ecoharmony."
        serviceImg={serviceOneImg}
        children={null}
      />
      <CounterOne type="wide" bg={undefined} />
      <OurServicesTwo title="About Us" tagline="Part of the solution" />
      {/*  <HeadingSection title="Latest Projects" tagline={undefined} classAppend={undefined} font={undefined} >
      <Portfolio columns="4" layout="wide" filter="true" space={null} classAppend={null} data={portfolioData} type={undefined} />
      </HeadingSection> */}
      {/* <TestimonialsTwo title="Testimonials" tagline="Happy clients" /> */}
      {/* <BlogSlider /> */}
      <FooterOne />
    </Loader>
  );
};

export default StartupBusiness;
