import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Mobile Compressors',
      description: 'Portable solutions for field operations',
      image: '/img/products/L&W Compressors/Mobile/1.png'
    },
    {
      id: 2,
      name: 'Silent Compressors',
      description: 'Noise-optimized for sensitive environments',
      image: '/img/products/L&W Compressors/Silent/1.png'
    },
    {
      id: 3,
      name: 'Booster Compressors',
      description: 'High-pressure industrial applications',
      image: '/img/products/L&W Compressors/Booster/1.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular compression solutions trusted by industry leaders worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;