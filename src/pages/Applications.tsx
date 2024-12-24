import {
  Droplet,
  Droplets,
  Building2,
  Martini,
  Factory,
  Biohazard,
  BringToFront,
  Ship,
  Waves,
} from "lucide-react";

const applications = [
  {
    title: "Oil and Gas Fields",
    description:
      "DiveMix provides robust and reliable compressed air and gas solutions tailored to the demanding environments of oil and gas fields. Our high-performance equipment ensures safe and efficient operations, supporting both upstream and downstream activities.",
    icon: Droplets,
    features: [
      "Medical gas systems",
      "Environmental testing",
      "Custom applications",
    ],
  },
  {
    title: "Food & Beverage",
    description:
      "In the food and beverage industry, purity and reliability are paramount. DiveMix offers advanced compressed air and gas systems that meet stringent safety and quality standards, ensuring contamination-free production processes and enhancing product integrity.",
    icon: Martini,
    features: [
      "Medical gas systems",
      "Environmental testing",
      "Custom applications",
    ],
  },
  {
    title: "Pharmaceutical Companies",
    description:
      "Pharmaceutical companies require precise and dependable gas solutions for critical applications. DiveMix delivers high-quality compressed air and gas systems that support stringent regulatory compliance and ensure the purity and reliability essential for pharmaceutical manufacturing.",
    icon: Building2,
    features: [],
  },
  {
    title: "Chemical and Petrochemical Industries",
    description:
      "DiveMix understands the complex needs of the chemical and petrochemical industries. Our specialized compressed air and gas equipment is designed to handle corrosive and hazardous environments, ensuring safe and efficient operations while maximizing productivity.",
    icon: Biohazard,
    features: [
      "Medical gas systems",
      "Environmental testing",
      "Custom applications",
    ],
  },
  {
    title: "Laser Cutting",
    description:
      "Precision and consistency are crucial in laser cutting applications. DiveMix provides cutting-edge gas solutions that deliver high-quality performance, enabling accurate and efficient cutting processes while reducing operational costs.",
    icon: BringToFront,
    features: [
      "Medical gas systems",
      "Environmental testing",
      "Custom applications",
    ],
  },
  {
    title: "Marine and Offshore Locations",
    description:
      "Marine and offshore environments demand durable and reliable compressed air and gas solutions. DiveMix offers equipment designed to withstand harsh marine conditions, ensuring safe and efficient operations for offshore drilling, shipping, and other maritime activities.",
    icon: Ship,
    features: [
      "Medical gas systems",
      "Environmental testing",
      "Custom applications",
    ],
  },
  {
    title: "Recreational Diving",
    description:
      "Safety is paramount in the recreational diving tourism industry. DiveMix supplies high-quality compressed air systems that ensure pure breathing air for divers, enhancing safety and providing a superior diving experience for tourists around the world.",
    icon: Waves,
    features: [
      "Medical gas systems",
      "Environmental testing",
      "Custom applications",
    ],
  },
];

const Applications = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Applications</h1>
        <p className="text-lg text-gray-600 mb-12">
          DiveMix technology serves a wide range of industries and applications,
          providing precise gas mixing solutions for various needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app) => (
            <div key={app.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <app.icon className="h-8 w-8 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-semibold">{app.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{app.description}</p>
              <ul className="space-y-2">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
