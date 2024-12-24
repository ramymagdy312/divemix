import React from "react";
import { ArrowRight, Shield, Settings, Users } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
            alt="Industrial equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Advanced Gas and Compressor Technologies
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Leading the industry with innovative solutions for gas mixing and
            compression systems. Trust DiveMix for reliability, precision, and
            excellence.
          </p>
          <a
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors"
          >
            Explore Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose DiveMix?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-cyan-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-gray-600">
                Our equipment meets the highest safety standards in the industry
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-cyan-100 rounded-full mb-4">
                <Settings className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                State-of-the-art solutions for optimal performance
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-cyan-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                24/7 technical support from our experienced team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Upgrade Your Systems?
          </h2>
          <p className="text-xl mb-8">
            Contact our team of experts to find the perfect solution for your
            needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-cyan-900 rounded-md hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
