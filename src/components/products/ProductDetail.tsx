import React from "react";
import type { Product } from "../../data/productCategories";
import ImageGallery from "../common/ImageGallery";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <ImageGallery images={product.images} alt={product.name} />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {product.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
