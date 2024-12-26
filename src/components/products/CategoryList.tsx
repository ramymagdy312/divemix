import { productCategories } from "../../data/productCategories";
import SearchBar from "./SearchBar";
import CategoryCard from "./CategoryCard";
import { useSearch } from "../../hooks/useSearch";

const CategoryList = () => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    productCategories,
    ['categoryName', 'shortDesc']
  );

  return (
    <div>
      <SearchBar 
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search categories..."
      />

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((category) => (
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