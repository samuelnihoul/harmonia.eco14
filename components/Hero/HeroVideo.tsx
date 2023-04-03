import React from "react";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
import Card from "@mui/material/Card"
import Paper from "@mui/material/Paper"
const Hero = ({ data }) => {
  return (
    <Paper sx={{backgroundImage:'/assets/images/pines.png'}} > 
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
        <img 
          src={"/assets/images/KarbonMoneta.png"}
        />
        </a>
    </Paper>
  );
};

export default Hero;
