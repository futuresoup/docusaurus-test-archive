import React, {useEffect, useState} from "react";
import moment from 'moment'
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomeCard from "../components/HomeCard/HomeCard";
import styles from "./index.module.css";
import clsx from "clsx";
import ClimateClock from "../components/ClimateClock/ClimateClock";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const [climateCountdown, setClimateCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [dateOfDeadline, setDateOfDeadline] = useState(
    moment("2029-07-22T16:00:00+00:00")
  );

  useEffect(() => {
    const timeBetween = moment.duration(dateOfDeadline.diff(moment()));

    const interval = setInterval(() => {
      setClimateCountdown({
        years: timeBetween.years(),
        months: timeBetween.months(),
        days: timeBetween.days(),
        hours: timeBetween.hours(),
        minutes: timeBetween.minutes(),
        seconds: padWithZeroes(timeBetween.seconds(), 2),
        milliseconds: padWithZeroes(timeBetween.milliseconds(), 3),
      });
    }, 1);

    return () => clearInterval(interval);
  }, [climateCountdown]);

  function padWithZeroes(input, minLength) {
    const inputString = input.toString();
    if (inputString.length >= minLength) return input;
    return "0".repeat(minLength - inputString.length) + inputString;
  }

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The number one resource for job seekers and investors alike to get involed in Climate Tech!"
    >
      <HomepageHeader />
      <main className={clsx(styles.mainBody)}>
        <ClimateClock/>
        <HomeCard
          title="Job Seekers"
          description="testing autodeploy dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageUrl={useBaseUrl("/img/design/hp-typing.png")}
        />
        <HomeCard
          title="Funders"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageUrl={useBaseUrl("/img/design/hp-handshake.png")}
          customStyles={{ flexDirection: "row-reverse" }}
        />
      </main>
    </Layout>
  );

  
}
