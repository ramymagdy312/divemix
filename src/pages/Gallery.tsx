import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryImages } from "../data/galleryImages";
import PageHeader from "../components/common/PageHeader";

const Gallery = () => {
  return (
    <div>
      <PageHeader
        title="Gallery"
        description="Experience our world-class facilities and installations through our curated collection of images"
        backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000"
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
