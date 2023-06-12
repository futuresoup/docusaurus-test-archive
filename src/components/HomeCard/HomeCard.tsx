import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HomeCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex justify-center">
      <div className="w-2/3">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
          <img className="w-1/3 h-40 object-cover" src={imageUrl} alt={title} />
          <div className="p-4 w-1/3 text-right translate-x-1/2 center">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
