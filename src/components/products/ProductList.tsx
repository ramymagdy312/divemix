import React from "react";
import type { Product } from "../../data/productCategories";
import ImageGallery from "../common/ImageGallery";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <ImageGallery images={product.images} alt={product.name} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;