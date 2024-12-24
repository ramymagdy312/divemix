import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productCategories } from '../../data/productCategories';
import ProductList from './ProductList';
import { ArrowLeft } from 'lucide-react';

interface CategoryDetailProps {
  categoryId: string;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ categoryId }) => {
  const navigate = useNavigate();
  const category = productCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8 pb-6 border-b">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h2 className="text-3xl font-bold">{category.categoryName}</h2>
            <p className="text-gray-600 mt-1">{category.shortDesc}</p>
          </div>
        </div>
        <img 
          src={category.image} 
          alt={category.categoryName}
          className="w-20 h-20 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <ProductList products={category.products} />
    </div>
  );
};

export default CategoryDetail;