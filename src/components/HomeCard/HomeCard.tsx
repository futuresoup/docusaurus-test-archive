import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HomeCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
