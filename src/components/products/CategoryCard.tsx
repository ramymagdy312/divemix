import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "../../data/productCategories";

interface CategoryCardProps {
  category: ProductCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      key={category.id}
      to={`/products/${category.id}`}
      className="card-hover group bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={category.image}
          alt={category.categoryName}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
          <h2 className="text-2xl font-bold text-white mb-1">
            {category.categoryName}
          </h2>
          <p className="text-white/90 text-sm line-clamp-2">
            {category.shortDesc}
          </p>
        </div>
      </div>
      <div className="p-4 mt-auto flex items-center justify-between text-sm text-cyan-600">
        <span className="font-medium">View Products</span>
        <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </Link>
  );
};

export default CategoryCard;