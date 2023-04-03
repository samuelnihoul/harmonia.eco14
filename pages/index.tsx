import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader/Loader";
import dataStartup from "../data/Slider/startup-business-data.json";
const serviceOneImg = "/assets/images/man.jpg";
import Navbar from '../components/Navbar'
import HeroVideo from "../components/Hero/HeroVideo";
import Welcome from "../components/WelcomeSection/Welcome";
import OurServices from "../components/OurServices/OurServices";
import OurServicesTwo from "../components/OurServices/OurServicesTwo";
import FooterOne from "../components/Footer/FooterOne";
import CounterOne from "../components/Counters/CounterOne";
import Card from "@mui/material/Card"
import {createTheme,ThemeProvider} from "@mui/material"
const theme=createTheme(
{
    palette:{
        primary:{
            main:"#000",
            light:'#fff'
          },
        secondary:{
            main:"#ffd700"
          }
      }
  }
)
const StartupBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
  <ThemeProvider theme={theme}>
    <Navbar/>
      <HeroVideo data={dataStartup} />
      <Welcome title="What We Do" tagline="The way we work is harmonious">
      <Card>
        We run different Regenerative Finance applications:
        <ul><li>a carbon offset marketplace with arty NFT certificates,</li>
          <li>a climate pass to enforce standards on travel emissions,</li>
          <li>a proof of carbon removal token and ecosystem,</li>
          <li>an API for integrated offstets in commercial flights,</li>
        </ul></Card>
      </Welcome>
      <OurServices
        title="Our Focus"
        tagline="We help implementing your ambitions of eco-harmony."
        serviceImg={serviceOneImg}
        children={null}
      />
      <CounterOne type="wide" bg={'white'} />
      <OurServicesTwo title="About Us" tagline="Part of the solution" />
        <FooterOne />
  </ThemeProvider>
    </Loader>
  );
};

export default StartupBusiness;
