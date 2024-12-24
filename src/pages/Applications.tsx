import React from 'react';
import { Droplet, Waves, Building2, Factory } from 'lucide-react';

const applications = [
  {
    title: "Commercial Diving",
    description: "Professional diving operations requiring precise gas mixtures for deep-sea operations",
    icon: Waves,
    features: ["Saturation diving support", "Surface-supplied diving", "Deep-sea operations"]
  },
  {
    title: "Industrial Gas Mixing",
    description: "Custom gas mixing solutions for manufacturing and industrial processes",
    icon: Factory,
    features: ["Process gas mixing", "Quality control systems", "Automated monitoring"]
  },
  {
    title: "Research Facilities",
    description: "High-precision gas mixing for scientific research and development",
    icon: Building2,
    features: ["Laboratory gas systems", "Environmental chambers", "Calibration services"]
  },
  {
    title: "Specialty Applications",
    description: "Customized solutions for unique gas mixing requirements",
    icon: Droplet,
    features: ["Medical gas systems", "Environmental testing", "Custom applications"]
  }
];

const Applications = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Applications</h1>
        <p className="text-lg text-gray-600 mb-12">
          DiveMix technology serves a wide range of industries and applications, 
          providing precise gas mixing solutions for various needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app) => (
            <div key={app.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <app.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">{app.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{app.description}</p>
              <ul className="space-y-2">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;