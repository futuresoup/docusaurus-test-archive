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
          title="Testing"
          description="Testing 123"
          imageUrl="https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
        />
        <HomeCard
          title="Testing"
          description="Testing 321"
          imageUrl="https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
          customStyles={{ flexDirection: "row-reverse" }}
        />
      </main>
    </Layout>
  );
}
