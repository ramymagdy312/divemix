import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/img/logoWhite.png" 
        alt="DiveMix Logo" 
        className="h-12 w-auto" // Increased from h-8 to h-12
      />
    </Link>
  );
};

export default Logo;