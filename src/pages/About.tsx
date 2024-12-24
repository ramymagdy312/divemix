import { Shield, Award, Users, Focus } from "lucide-react";

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">About DiveMix</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            DiveMix has grown to be a prominent, active figure, known for its
            reliable top-of-the-range compressed air and gas products as well as
            plants DiveMix is the sole agent, representative, distributor and
            authorized service point for carefully selected, high quality
            products that carry the prestigious “made in Germany” trademark We
            serve various market sectors such as oil and gas fields, food &
            beverage, pharmaceutical companies, chemical and petrochemical
            industries, laser cutting, marine and offshore locations, as well as
            the recreational diving tourism industry to name just a few
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-12">
            <div className="text-center">
              <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p>Industry-leading knowledge and experience</p>
            </div>

            <div className="text-center">
              <Award className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p>Commitment to quality and customer satisfaction</p>
            </div>

            <div className="text-center">
              <Focus className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p>Tailored solutions to meet your unique requirements</p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsiveness</h3>
              <p>Prompt service and support</p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance</h3>
              <p>Adherence to regulatory standards and best practices</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-8">
            At DiveMix, our mission is clear, to provide industry-leading
            compressed air and gas solutions. Our highly skilled personnel
            possess unparalleled expertise, ensuring that we deliver exceptional
            customer service alongside the highest quality products.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Value</h2>
          <p className="mb-8">
            We uphold the prestigious “Made in Germany” standard, ensuring
            unmatched reliability and performance in every product. We
            continuously explore new technologies and methods to provide
            cutting-edge solutions. Our clients’ needs are at the forefront of
            everything we do, driving us to offer personalized and responsive
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
