import { useParams } from "react-router-dom";
import CategoryList from "../components/products/CategoryList";
import CategoryDetail from "../components/products/CategoryDetail";
import PageHeader from "../components/common/PageHeader";

const Products = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <PageHeader
        title="Our Products"
        description="Discover our comprehensive range of gas mixing and compression solutions"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
      />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryId ? (
            <CategoryDetail categoryId={categoryId} />
          ) : (
            <CategoryList />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
