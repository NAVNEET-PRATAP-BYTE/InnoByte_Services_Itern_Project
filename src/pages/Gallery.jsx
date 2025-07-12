import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/ayodhya.webp", alt: "Beautiful Palash flowers in full bloom", category: "Nature" },
    { src: "/flower.jpg", alt: "Gorgeous Window View", category: "Nature" },
    { src: "/room1.jpg", alt: "Comfortable guest room", category: "Room" },
    { src: "/mithonDam.webp", alt: "Lakes and Dams", category: "Dam" },
    { src: "/1.jpg", alt: "Fantastic Mountains view", category: "Mountain" },
    { src: "/baranti.webp", alt: "Scenic landscape view", category: "Nature" },
  ];

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((selectedImage + 1) % images.length);
  const prevImage = () => setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);

  return (
    <section id='gallery' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a glimpse of the space and ambiance through our curated images.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-64 bg-gray-100">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center text-gray-600 text-sm font-medium">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-200"
              >
                <X size={32} />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-200"
              >
                <ChevronRight size={32} />
              </button>

              {/* Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="bg-amber-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {images[selectedImage].category}
                </div>
                <p className="text-sm opacity-90">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
