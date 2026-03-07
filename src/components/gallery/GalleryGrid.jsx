import React, { useState } from 'react';

export default function GalleryGrid({ artworks, onArtworkClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onArtworkClick(index)}
        >
          <div className="relative overflow-hidden bg-gray-100 aspect-square mb-6">
            <img
              src={artwork.image}
              alt={artwork.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredIndex === index ? 'scale-105' : 'scale-100'
              }`}
              loading="lazy"
            />
            {/* Overlay with metadata preview */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex flex-col items-end justify-end p-4">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-light text-sm">
                Click to view
              </span>
            </div>
          </div>

          {/* Artwork Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-light tracking-wide">{artwork.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 font-light">{artwork.category}</p>
              <p className="text-sm text-gray-500 font-light">{artwork.year}</p>
            </div>
            {artwork.price && (
              <p className="text-sm font-light text-gray-700">{artwork.price}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}