import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import PageHeader from "../components/common/PageHeader";

const Services = () => {
  return (
    <div>
      <PageHeader
        title="Services"
        description="Discover how our solutions serve diverse industries with precision and reliability"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} Icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default Services;
