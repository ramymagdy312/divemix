import { useParams } from "react-router-dom";
import CategoryList from "../components/products/CategoryList";
import CategoryDetail from "../components/products/CategoryDetail";
import ProductHero from "../components/products/ProductHero";

const Products = () => {
  const { categoryId } = useParams();
  return (
    <div className="min-h-screen bg-gray-50">
      {categoryId ? (
        <CategoryDetail categoryId={categoryId} />
      ) : (
        <>
          <ProductHero
            category={{
              id: "all",
              categoryName: "Our Products",
              shortDesc:
                "Discover our comprehensive range of gas mixing and compression solutions, engineered for excellence and built to last.",
              hero: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000",
              image: "/img/products/L&W Compressors/Mobile/1.png",
              products: [],
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <CategoryList />
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
