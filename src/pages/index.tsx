import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The number one resource for job seekers and investors alike to get involed in Climate Tech!"
    >
      <HomepageHeader />
      <main style={{ padding: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        officia a recusandae, impedit minima aut, aperiam velit expedita qui
        ipsam sed accusamus nisi totam iste! Assumenda sint deserunt nihil
        perferendis?
        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi
        perferendis itaque natus pariatur temporibus nihil adipisci quo debitis,
        ad eos? Ullam similique animi autem aperiam? Quas perferendis
        exercitationem asperiores.
        <br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga animi, eos
        dignissimos error aliquam corporis, voluptatum, perferendis ut totam ab
        excepturi quae atque? Quae, quia voluptatem adipisci dolorum repudiandae
        sunt?
      </main>
    </Layout>
  );
}
