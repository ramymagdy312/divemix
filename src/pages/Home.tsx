import React from "react";
import { ArrowRight } from "lucide-react";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://player.vimeo.com/external/459863667.hd.mp4?s=b5c5d4d1c0a7947cc2d7c8c3c4a3e5a9b7c4e3b2&profile_id=174"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Pioneering the Future of<br />
            <span className="text-cyan-400">Gas Technology</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-200">
            Leading the industry with innovative solutions for gas mixing and
            compression systems. Trust DiveMix for reliability, precision, and
            excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors text-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Stats Section */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-cyan-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-cyan-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-cyan-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-cyan-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cyan-100">
            Join the industry leaders who trust DiveMix for their critical gas mixing needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-cyan-900 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;