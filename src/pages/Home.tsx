import HeroSection from "../components/home/HeroSection";
import CompanySection from "../components/home/CompanySection";
import FeaturedCategories from "../components/home/FeaturedCategories";
import StatsSection from "../components/home/StatsSection";
import ServiceGrid from "../components/services/ServiceGrid";
import { application } from "../data/applications";
import ApplicationCard from "../components/applications/ApplicationCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactCTA from "../components/home/ContactCTA";
import FloatingContactForm from "../components/home/FloatingContactForm";

const Home = () => {
  const featuredApplications = application.slice(0, 3);

  return (
    <div className="relative">
      <HeroSection />
      <CompanySection />
      <FeaturedCategories />
      <StatsSection />

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive solutions for all your gas mixing and compression needs
            </motion.p>
          </div>
          <ServiceGrid />
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Featured Applications
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Discover how our solutions serve diverse industries
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredApplications.map((app) => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/applications"
              className="inline-flex items-center px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
            >
              Explore All Applications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
      <FloatingContactForm />
    </div>
  );
};

export default Home;