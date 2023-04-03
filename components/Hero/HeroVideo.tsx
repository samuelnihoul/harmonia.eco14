import React from "react";
import styles from './Hero.module.css';
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
import Card from "@mui/material/Card"
const Hero = ({ data }) => {
  return (
    <section className={styles.localHero}>
      <Card>
        <h2
          className="white-color font-400 letter-spacing-5"
          style={{ fontSize: 40 }}
        >
          {data.tagline}
        </h2>
        <h1>
          <a
            href="karbonbasar.harmonia-eko.ooo"
            className="white-color font-700"
            style={{
              background: "linear-gradient(to right,#ffd700, #9140bf)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.title}
          </a>
        </h1>
        <h3 className="white-color font-400" style={{ marginBottom: "2rem" }}>
          {data.text}
          <br />
          <b
            style={{
              background: "linear-gradient(to right,#ffd700,#9140BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Together.
          </b>
        </h3>
        <SliderButtons buttons={data.buttons} />
      </Card>
      <a href='karbonmoneta.harmonia-eko.ooo'>
        <img className={styles.karbonMoneta + "color-transparent"}
          src={"/assets/images/KarbonMoneta.png"}
        />
        </a>
    </section>
  );
};

export default Hero;
