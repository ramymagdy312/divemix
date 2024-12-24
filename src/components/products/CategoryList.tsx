import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/productCategories';
import { ArrowRight, Search } from 'lucide-react';

const CategoryList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = productCategories.filter(category =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={category.image} 
                alt={category.categoryName}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-1">{category.categoryName}</h2>
                <p className="text-white/90 text-sm line-clamp-2">{category.shortDesc}</p>
              </div>
            </div>
            <div className="p-4 mt-auto flex items-center justify-between text-sm text-blue-600">
              <span className="font-medium">View Products</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No categories found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryList;