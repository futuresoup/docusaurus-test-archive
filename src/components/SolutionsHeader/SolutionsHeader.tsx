import React from "react";
import clsx from "clsx";
import styles from "./Solutions.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import imageToAdd from "../../../static/img/drawdown-solutions-chart.png";

export default function SolutionsHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("container", styles.solutionsContainer)}>
      <div className={clsx("leftSide", styles.leftSide)}>
      <h1 className={clsx("hero__subtitle", styles.headerStatement)}>
      Yes we know exactly how to solve the climate crisis
      </h1>
      <p style={{ color:"black"}}>
      The last 40+ years are not a complete waste. <br/>
      We have all the science and tech needed to win this critical decade.<br/>
      Climate solutions are organized by sector.<br/>
      Together, we are tracking all progress made toward net zero pollution.
      </p>
      </div>

      <img className={clsx("leftSide", styles.rightSide)} src={imageToAdd}/>
    </header>
  );
}
