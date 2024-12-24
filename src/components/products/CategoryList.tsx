import { useState } from "react";
import { productCategories } from "../../data/productCategories";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = productCategories.filter(
    (category) =>
      category.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No categories found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
