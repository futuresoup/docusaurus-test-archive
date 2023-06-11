import React, { useEffect, useCallback, useState } from "react";
import clsx from "clsx";
import styles from "./ClimateClock.module.css";
import { loadScripts, scriptCleanup } from "@site/src/utils/scriptLogic";

interface ClockConfig {
  scriptType?: string;
  originUrl?: string;
  scriptTags?: string[];
}

const ClimateClock: React.FC<ClockConfig> = ({
  scriptType = "text/javascript",
  originUrl = "https://climateclock.net/wp-content/themes/C2D/js/",
  scriptTags = [
    `${originUrl}jquery.min.js`,
    `${originUrl}jquery.isMobile.min.js`,
    `${originUrl}magnific-popup.min.js`,
    `${originUrl}CO2Calculator.js?r=202111041017&ver=4.7.26`,
    `${originUrl}scripts.js?r=202111041017&ver=4.7.26`,
  ],
}) => {
  const [countdown, setCountdown] = useState(null);

  const loadClimateClockScripts = useCallback(() => {
    loadScripts(scriptTags);
    setCountdown(document.querySelector("#timecountdown"));

    return () => {
      scriptCleanup(scriptTags);
    };
  }, [originUrl, scriptType, scriptTags]);

  useEffect(() => {
    const cleanup = loadClimateClockScripts();
    setInterval(() => {
      if (countdown !== null) {
        console.log(countdown);
      }
    }, 3000);
    return cleanup;
  }, [loadClimateClockScripts]);

  return (
    <div id="clock" className={clsx(styles.clock)}>
      <div className={clsx(styles.countdown)}>
        <h3 id="time-to-two">Time Left To Limit Global Warming To 1.5ºC</h3>
        <div id="timecountdown"></div>
      </div>
      {/* <div className={clsx(styles.gTemp)}>
        <h3 id="global-temp">Global warming to date ºC</h3>
        <div id="global-temp-container">
          <span id="globaltemp" className="bold grad"></span>
        </div>
      </div> */}
      {/* <div className={clsx(styles.ceeOhTwo)}>
        <h3 id="tonnes">
          Tonnes of CO<sub>2</sub> Emitted
        </h3>
        <div id="carbontonnes"></div>
      </div> */}
    </div>
  );
};

export default ClimateClock;
