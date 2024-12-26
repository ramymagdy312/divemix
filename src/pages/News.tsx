import AnimatedElement from "../components/common/AnimatedElement";
import NewsCard from "../components/NewsCard";
import { news } from "../data/news";

const News = () => {
  return (
    <AnimatedElement animation="fadeIn">
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Latest News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default News;
