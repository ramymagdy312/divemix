import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { Settings, Wrench, BookOpen, PenTool } from 'lucide-react';

const icons = {
  "Equipment Installation": Settings,
  "Maintenance & Repair": Wrench,
  "Training & Certification": BookOpen,
  "System Design": PenTool,
};

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              Icon={icons[service.title as keyof typeof icons]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;