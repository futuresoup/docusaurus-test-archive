import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./HomePage.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">{siteConfig.customFields.tagline2}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </header>
  );
}
