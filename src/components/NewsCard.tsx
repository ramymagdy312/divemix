import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, summary, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <a
          href={link}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;