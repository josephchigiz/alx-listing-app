import React from "react";
import { PropertyBadgeProps } from "@/interfaces";

const PropertyBadge: React.FC<PropertyBadgeProps> = ({
  status,
  color = "gray",
}) => {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    gray: "bg-gray-100 text-gray-800",
  };
  return (
    <span className="px-2 py-1 text-sm font-medium rounded-full ${colorClasses[color]}">
      {status}
    </span>
  );
};

export default PropertyBadge;
