import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import db from '../helpers/firebase'
import { getDocs, DocumentData, collection } from 'firebase/firestore'
const CounterOne = ({ bg, type }) => {
  const [viewed, setViewed] = useState(false);
  const [data, setData] = useState<DocumentData>([])
  async function fetchData() {
    if (data.length == 0) {
      const snapshot = await getDocs(collection(db, 'KPIs'))
      setData(snapshot.docs[0].data())
    }
  }
  const viewChangeHandler = (isVisible: any) => {
    if (isVisible) setViewed(true);
  };

  useEffect(
    () => {
      fetchData();
    }, []
  )
  return (
    <section className={(bg ? bg : "dark-bg") + " pt-80 pb-80"}>
      {bg === "white-bg" || bg === "dark-bg" ? null : (
        <div className="parallax-overlay"></div>
      )}
      <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          {Object.keys(data).map((key: string, i: number) => (
            <div
              className="col-md-3 counter text-center col-sm-6"
              key={key}
              data-aos-delay={`${i}00`}
              data-aos={"fade-up"}
              data-aos-duration={1000}
              data-aos-easing={"ease-in-sine"}
            >
              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                  {/* I don't know why `counter.decimals` is not working */}
                  <CountUp decimals={0} end={viewed ? data[key] : 0} />


                </VisibilitySensor>
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                {key}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterOne;
