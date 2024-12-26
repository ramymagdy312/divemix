import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedElement from "./common/AnimatedElement";

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  link: string;
  index?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  summary,
  imageUrl,
  link,
  index = 0,
}) => {
  return (
    <AnimatedElement animation="slideUp" delay={index * 0.1}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{summary}</p>
          <Link
            to={link}
            className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default NewsCard;
