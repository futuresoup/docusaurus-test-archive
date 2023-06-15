import clsx from "clsx";
import React from "react";
import styles from "./HomeCard.module.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HomeCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={clsx(styles.cardContainer)}>
      <img className={clsx(styles.cardImg)} src={imageUrl} alt={title} />
      <div className={clsx(styles.cardText)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
