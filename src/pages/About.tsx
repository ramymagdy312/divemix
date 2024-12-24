import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">About DiveMix</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            DiveMix is a leading provider of gas mixing technologies and solutions for the diving industry. 
            With over two decades of experience, we've established ourselves as pioneers in developing 
            safe, reliable, and innovative gas mixing systems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p>Industry-leading safety standards and certifications</p>
            </div>
            
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
              <p>Premium equipment and superior performance</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>Experienced professionals dedicated to your success</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-8">
            To provide the diving industry with the most reliable, efficient, and safe gas mixing 
            solutions while maintaining the highest standards of quality and customer service.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="mb-8">
            To be the global leader in gas mixing technology, setting industry standards and 
            driving innovation in diving safety and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;