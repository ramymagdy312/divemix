import ServiceGrid from "../components/services/ServiceGrid";
import PageHeader from "../components/common/PageHeader";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Services"
        description="Discover our comprehensive range of gas mixing and compression solutions"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceGrid />
      </div>
    </div>
  );
};

export default Services;
