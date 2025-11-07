import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        {price && (
          <p className="text-indigo-600 font-medium mt-3">{`$${price}/night`}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
