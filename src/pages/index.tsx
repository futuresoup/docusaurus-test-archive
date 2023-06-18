import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomeCard from "../components/HomeCard/HomeCard";
import styles from "./index.module.css";
import clsx from "clsx";
import ClimateClock from "../components/ClimateClock/ClimateClock";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The number one resource for job seekers and investors alike to get involed in Climate Tech!"
    >
      <HomepageHeader />
      <main className={clsx(styles.mainBody)}>
        <ClimateClock />
        <HomeCard
          title="Climate Job Seekers"
          description="Tech pays well, but requires hard skills and experience to get noticed. This is challenging if you're young, or in the middle of a career change."
          imageUrl="https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
        />
        <HomeCard
          title="Climate Startups"
          description="If you are a founder or an investor --x"
          imageUrl="https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
          customStyles={{ flexDirection: "row-reverse" }}
        />
      </main>
    </Layout>
  );
}
