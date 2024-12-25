import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          Icon={service.icon}
          features={service.features}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;