import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import StatsSection from "../components/home/StatsSection";
import FloatingContactForm from "../components/home/FloatingContactForm";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturedProducts />
      <StatsSection />
      <FloatingContactForm />
    </div>
  );
};

export default Home;