import clsx from "clsx";
import React, { CSSProperties } from "react";
import Link from "@docusaurus/Link";
import styles from "./HomeCard.module.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  customStyles?: CSSProperties;
}

const HomeCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  customStyles,
  linkUrl,
}) => {
  return (
    <div className={clsx(styles.cardContainer)} style={customStyles}>
      <img className={clsx(styles.cardImg)} src={imageUrl} alt={title} />
      <div className={clsx(styles.cardText)}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          to={linkUrl}
          className={clsx(
            styles.cardButton,
            "button button--secondary button--lg cthLink_src-components-HomepageHeader-HomePage-module"
          )}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
