import React from "react";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryImages } from "../data/galleryImages";
import PageHeader from "../components/common/PageHeader";

const Gallery = () => {
  return (
    <div>
      <PageHeader
        title="Gallery"
        description="Experience our world-class facilities and installations through our curated collection of images"
        backgroundImage="https://images.unsplash.com/photo-1581093588401-fbb62a02f120"
      />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
