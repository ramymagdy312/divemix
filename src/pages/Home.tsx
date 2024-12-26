import HeroSection from "../components/home/HeroSection";
import CompanySection from "../components/home/CompanySection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import FeaturedApplications from "../components/home/FeaturedApplications";
import StatsSection from "../components/home/StatsSection";
import ContactCTA from "../components/home/ContactCTA";
import FloatingContactForm from "../components/home/FloatingContactForm";
import FeaturedServices from "../components/home/FeaturedServices";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <CompanySection />
      <FeaturedCategories />
      <StatsSection />
      <FeaturedServices />
      <FeaturedApplications />
      <ContactCTA />
      <FloatingContactForm />
    </div>
  );
};

export default Home;
