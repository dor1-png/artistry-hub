import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArtworkModal({ artwork, isOpen, onClose, onNavigate, totalArtworks, currentIndex }) {
  if (!isOpen || !artwork) return null;

  const handlePrevious = () => {
    onNavigate((currentIndex - 1 + totalArtworks) % totalArtworks);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % totalArtworks);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-60"
      >
        <X size={32} />
      </button>

      {/* Main Container */}
      <div className="w-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Image Section */}
        <div className="flex-1 bg-gray-100 flex items-center justify-center min-h-96 md:min-h-full relative group">
          <img
            src={artwork.image}
            alt={`${artwork.title} - ${artwork.medium}, ${artwork.dimensions}, created in ${artwork.year}`}
            className="max-h-full max-w-full object-contain"
            title={`${artwork.title} | ${artwork.category}`}
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-light text-gray-700">
            {currentIndex + 1} / {totalArtworks}
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-96 p-8 md:p-12 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-light tracking-tight mb-2">{artwork.title}</h1>
              <p className="text-gray-600 font-light italic">{artwork.category}</p>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-gray-700 font-light leading-relaxed text-lg">
                {artwork.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              {artwork.year && (
                <div className="flex justify-between items-start">
                  <span className="text-sm font-light text-gray-500 uppercase tracking-wide">Year</span>
                  <span className="text-base font-light text-gray-800">{artwork.year}</span>
                </div>
              )}

              {artwork.medium && (
                <div className="flex justify-between items-start">
                  <span className="text-sm font-light text-gray-500 uppercase tracking-wide">Medium</span>
                  <span className="text-base font-light text-gray-800 text-right">{artwork.medium}</span>
                </div>
              )}

              {artwork.dimensions && (
                <div className="flex justify-between items-start">
                  <span className="text-sm font-light text-gray-500 uppercase tracking-wide">Dimensions</span>
                  <span className="text-base font-light text-gray-800 text-right">{artwork.dimensions}</span>
                </div>
              )}

              {artwork.price && (
                <div className="flex justify-between items-start">
                  <span className="text-sm font-light text-gray-500 uppercase tracking-wide">Price</span>
                  <span className="text-base font-light text-gray-800">{artwork.price}</span>
                </div>
              )}

              {artwork.status && (
                <div className="flex justify-between items-start">
                  <span className="text-sm font-light text-gray-500 uppercase tracking-wide">Status</span>
                  <span className="text-base font-light text-gray-800">{artwork.status}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full mt-8 bg-gray-800 text-white py-3 font-light tracking-wide hover:bg-gray-700 transition-colors duration-300">
            Inquire About This Work
          </button>
        </div>
      </div>
    </div>
  );
}