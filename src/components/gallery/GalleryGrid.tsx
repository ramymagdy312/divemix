import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(images.map(img => img.category))];
  
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${filter === category 
                ? 'bg-cyan-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer group relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-end">
              <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;