"use client";

import { useEffect, useState } from "react";
import CounterItem from "./CounterItem";
import "../styles/Counter.css";

export default function Counter(): JSX.Element {
  const [secondsOnSite, setSecondsOnSite] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsOnSite((prev) => prev + 1);
      setDisplayedCount((prev) => Math.min(prev + 1, secondsOnSite));
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsOnSite]);
  return (
    <section className="section-counters text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <CounterItem count={3} text="Years Experience" />
          </div>
          <div className="col-sm-4 col-xs-12">
            <CounterItem count={9} text="Projects Delivered" />
          </div>
          <div className="col-sm-4 col-xs-12">
            <CounterItem
              count={displayedCount}
              text={
                <>
                  Seconds on this site!
                  <br />
                  What are you waiting for?
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
