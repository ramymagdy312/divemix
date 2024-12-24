import React from "react";
import type { Product } from "../../data/productCategories";
import ProductDetail from "./ProductDetail";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="space-y-8">
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;