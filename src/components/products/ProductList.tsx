import React from "react";
import type { Product } from "../../data/productCategories";
import ProductDetail from "./ProductDetail";
import SearchBar from "./SearchBar";
import { useSearch } from "../../hooks/useSearch";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(products, ['name', 'desc']);

  return (
    <div>
      <SearchBar 
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search products..."
      />
      
      {filteredItems.length > 0 ? (
        <div className="space-y-8">
          {filteredItems.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;