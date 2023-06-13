import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import HomeCard from "../components/HomeCard/HomeCard";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The number one resource for job seekers and investors alike to get involed in Climate Tech!"
    >
      <HomepageHeader />
      <main style={{ padding: "1rem" }}>
        <HomeCard
          title="Testing"
          description="Testing 123"
          imageUrl="https://www.english-efl.com/wp-content/uploads/2019/12/test.jpg"
        />
      </main>
    </Layout>
  );
}
