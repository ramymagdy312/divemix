import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          DiveMix technology serves a wide range of industries and applications,
          providing precise gas mixing solutions for various needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} Icon={service.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
