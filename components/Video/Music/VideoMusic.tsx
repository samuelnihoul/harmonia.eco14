import React, { forwardRef } from "react";


const VideoMusic = ({ toggler, setToggler, children }) => (
  <section
    className="parallax-bg-13 fixed-bg"
    data-stellar-background-ratio="0.2"
    id="how"

  >
    <div className="overlay-bg"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center offset-md-2 white-color music-event">
          <a
            className="video-play popup-youtube pt-50 pb-50"
            href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
            title=""
            onClick={(e) => {
              e.preventDefault();
              setToggler(!toggler);
            }}
          >
            <i className="icofont-ui-play"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default VideoMusic;
