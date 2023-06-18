import clsx from "clsx";
import React, { CSSProperties } from "react";
import styles from "./HomeCard.module.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  customStyles?: CSSProperties;
}

const HomeCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  customStyles,
}) => {
  return (
    <div className={clsx(styles.cardContainer)} style={customStyles}>
      <img className={clsx(styles.cardImg)} src={imageUrl} alt={title} />
      <div className={clsx(styles.cardText)}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          className={clsx(
            styles.cardButton,
            "button button--secondary button--lg cthLink_src-components-HomepageHeader-HomePage-module"
          )}
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default HomeCard;
