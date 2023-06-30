import React, { useEffect, useState } from "react";
import moment from "moment";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomeCard from "../components/HomeCard/HomeCard";
import styles from "./index.module.css";
import clsx from "clsx";
import NewClimateClock from "../components/NewClimateClock/NewClimateClock";
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
    moment("")
  );

  useEffect(()=> {
    fetch('https://api.climateclock.world/v2/clock.json')
      .then(res => res.json())
      .then(climateClockData => setDateOfDeadline(moment(climateClockData.data.modules.carbon_deadline_1.timestamp)))
  }, [])
 
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
        <NewClimateClock countDown={climateCountdown} />
        <HomeCard
          title="Climate Job Seekers"
          description="Becoming a climate expert feels daunting. But it's easier than you think."
          imageUrl={useBaseUrl("/img/climate-job.png")}
          linkUrl="/resources"
        />
        <HomeCard
          title="Climate Startups"
          description="The climate tech landscape is changing rapidly. Whether you're a founder, investor, philanthropist, or government funders - we want to help you spend money wisely for the greatest impact"
          imageUrl={useBaseUrl("/img/climate-startups.webp")}
          customStyles={{ flexDirection: "row-reverse" }}
          linkUrl="/sectors"
        />
      </main>
    </Layout>
  );
}
