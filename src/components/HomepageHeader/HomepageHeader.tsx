import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./HomePage.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ClimateClock from "../ClimateClock/ClimateClock";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.headerSubtitle)}>
          {siteConfig.tagline}
        </p>
        {/* <p className={clsx("hero__subtitle", styles.headerSubtitle)}>
          {siteConfig.customFields.tagline2}
        </p> */}
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.cthLink
            )}
            to="/intro"
          >
            Join the Movement
          </Link>
        </div>
        <ClimateClock />
      </div>
    </header>
  );
}
