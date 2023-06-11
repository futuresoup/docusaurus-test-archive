import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import styles from "./ClimateClock.module.css";
import { loadScripts, scriptCleanup } from "@site/src/utils/scriptLogic";

interface ClockConfig {
  scriptType?: string;
  originUrl?: string;
  scriptTags?: string[];
}

const loadClimateClockScripts = async (scriptTags: string[]) => {
  await Promise.all(scriptTags.map((tag) => loadScript(tag)));
};

const loadScript = (src: string, type: string = "text/javascript") => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = type;
    script.async = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(script);
  });
};

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
  const countdownRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    let observer: MutationObserver | null = null;

    const cleanup = async () => {
      if (observer) {
        observer.disconnect();
      }
      await scriptCleanup(scriptTags);
    };

    loadClimateClockScripts(scriptTags)
      .then(() => {
        if (countdownRef.current) {
          observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (
                mutation.type === "childList" &&
                mutation.target === countdownRef.current
              ) {
                const countdownValue = countdownRef.current.textContent;
                setCountdown(countdownValue);
              }
            }
          });

          observer.observe(countdownRef.current, { childList: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return cleanup;
  }, []);

  return (
    <div id="clock" className={clsx(styles.clock)}>
      <div className={clsx(styles.countdown)}>
        <h3 id="time-to-two">Time Left To Limit Global Warming To 1.5ºC</h3>
        <div
          id="timecountdown"
          ref={countdownRef}
          style={{ display: "none" }}
        ></div>
        <span>{countdown}</span>
      </div>
    </div>
  );
};

export default ClimateClock;
