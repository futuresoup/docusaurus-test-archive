import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SolutionsHeader from "../components/SolutionsHeader/SolutionsHeader";
import styles from "./index.module.css";
import clsx from "clsx";
import SolutionsList from "../components/SolutionsList/SolutionsList";

export default function Solutions(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The number one resource for job seekers and investors alike to get involed in Climate Tech!"
    >
      <SolutionsHeader />
      <main className={clsx(styles.mainBody)}>
        <SolutionsList />
      </main>
    </Layout>
  );
}
