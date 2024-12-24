import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/img/logoWhite.png" 
        alt="DiveMix Logo" 
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default Logo;