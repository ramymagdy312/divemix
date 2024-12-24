import React from 'react';

const Timeline = () => {
  const milestones = [
    { year: '1990', title: 'Company Founded', description: 'DiveMix was established with a vision to revolutionize gas mixing technology.' },
    { year: '2000', title: 'International Expansion', description: 'Expanded operations to serve clients across the Middle East.' },
    { year: '2010', title: 'Innovation Award', description: 'Received industry recognition for breakthrough compression technology.' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched smart monitoring systems for enhanced performance.' }
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-cyan-600 font-bold">{milestone.year}</span>
                <h3 className="text-xl font-semibold mt-1">{milestone.title}</h3>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;