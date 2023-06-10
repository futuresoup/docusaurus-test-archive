import React, { useEffect } from "react";
import { loadScripts } from "@site/src/utils/loadScripts";

interface ClockProps {
  scriptType?: string;
  originUrl?: string;
}

const ClockScript: React.FC<ClockProps> = ({
  scriptType = "text/javascript",
  originUrl = "https://climateclock.net/wp-content/themes/C2D/js/",
}) => {
  useEffect(() => {
    const scriptTags: string[] = [
      `${originUrl}jquery.min.js`,
      `${originUrl}jquery.isMobile.min.js`,
      `${originUrl}magnific-popup.min.js`,
      `${originUrl}CO2Calculator.js?r=202111041017&ver=4.7.26`,
      `${originUrl}scripts.js?r=202111041017&ver=4.7.26`,
    ];

    loadScripts(scriptTags);

    return () => {
      scriptTags.forEach((tag) => {
        const script = document.querySelector(`script[src="${tag}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [originUrl, scriptType]);

  return (
    <div id="clock">
      <h3 id="global-temp">Global warming to date ºC</h3>
      <div id="global-temp-container">
        <span id="globaltemp" className="bold grad"></span>
      </div>
      <h3 id="time-to-two">Time left to 1.5ºC</h3>
      <div id="timecountdown"></div>
      <p>8 Years, 10 Months</p>
      <h3 id="tonnes">
        Tonnes of CO<sub>2</sub> Emitted
      </h3>
      <div id="carbontonnes"></div>
    </div>
  );
};

export default ClockScript;
