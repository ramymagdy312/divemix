import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-4 bg-cyan-100 rounded-full mb-4">
        <Icon className="h-8 w-8 text-cyan-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
