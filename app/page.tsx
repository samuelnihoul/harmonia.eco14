import HeroVideo from "../components/Hero/HeroVideo";
import Welcome from "../components/WelcomeSection/Welcome";
import OurServices from "../components/OurServices";
import OurServices2 from '../components/OurServices2'
import FooterOne from "../components/Footer";
import CounterOne from "../components/Counter";
const Home= () => {
  return (
  <>
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
      </>
  );
};

export default Home;
