import React from "react";
import type { Application } from "../../data/applications";

interface ApplicationCardProps {
  application: Application;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <img
            src={application.images[0]}
            alt={application.name}
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{application.name}</h3>
        <p className="text-gray-600 leading-relaxed">{application.desc}</p>
        {application.features.length > 0 && (
          <ul className="mt-4 space-y-2">
            {application.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApplicationCard;