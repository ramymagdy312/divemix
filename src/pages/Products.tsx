import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../components/products/CategoryList';
import CategoryDetail from '../components/products/CategoryDetail';

const Products = () => {
  const { categoryId } = useParams();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Our Products</h1>
        {categoryId ? <CategoryDetail categoryId={categoryId} /> : <CategoryList />}
      </div>
    </div>
  );
}

export default Products;