import React, { useState } from 'react';
import ArtworkModal from '../components/ArtworkModal';
import GalleryGrid from '../components/gallery/GalleryGrid.jsx';
import CategoryFilter from '../components/gallery/CategoryFilter.jsx';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // All artworks with extended metadata
  const allArtworks = [
    {
      id: 1,
      title: 'Serenity',
      image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=1200&h=1200&fit=crop',
      category: 'Digital',
      description: 'A meditative exploration of calm and quietude, blending abstract forms with subtle color transitions. This piece invites the viewer to pause and breathe.',
      year: 2024,
      medium: 'Digital Painting',
      dimensions: '80 x 60 cm',
      price: '$2,500',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Essence',
      image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0b1b1f?w=1200&h=1200&fit=crop',
      category: 'Painting',
      description: 'An intimate portrait of human connection and vulnerability. Using layered acrylics and mixed media, this work captures the ephemeral nature of emotion.',
      year: 2023,
      medium: 'Acrylic & Mixed Media',
      dimensions: '100 x 75 cm',
      price: '$3,200',
      status: 'Sold'
    },
    {
      id: 3,
      title: 'Whispers',
      image: 'https://images.unsplash.com/photo-1578052869485-d7b4f4c7d1c0?w=1200&h=1200&fit=crop',
      category: 'Photography',
      description: 'A series of botanical studies capturing the delicate interplay of light and shadow. Each frame speaks to the quiet beauty found in nature\'s smallest moments.',
      year: 2024,
      medium: 'Archival Pigment Print',
      dimensions: '60 x 60 cm',
      price: '$1,800',
      status: 'Available'
    },
    {
      id: 4,
      title: 'Harmony',
      image: 'https://images.unsplash.com/photo-1578301978162-7a3c1e0a9a0b?w=1200&h=1200&fit=crop',
      category: 'Digital',
      description: 'A kinetic visual composition exploring rhythm and balance. This work combines geometric precision with organic flow to create a sense of movement.',
      year: 2024,
      medium: 'Digital Animation',
      dimensions: '1920 x 1080 px',
      price: '$1,500',
      status: 'Available'
    },
    {
      id: 5,
      title: 'Metamorphosis',
      image: 'https://images.unsplash.com/photo-1578926078328-123f5474f1cb?w=1200&h=1200&fit=crop',
      category: 'Sculpture',
      description: 'A transformation piece carved from sustainable materials, representing the journey of change and growth. Invites tactile interaction and multiple perspectives.',
      year: 2023,
      medium: 'Reclaimed Wood & Bronze',
      dimensions: '150 x 80 x 40 cm',
      price: '$4,500',
      status: 'Available'
    },
    {
      id: 6,
      title: 'Luminescence',
      image: 'https://images.unsplash.com/photo-1577720607888-8e5e3b1cb42f?w=1200&h=1200&fit=crop',
      category: 'Installation',
      description: 'An immersive light installation exploring perception and presence. The work evolves throughout the day, responding to natural light conditions.',
      year: 2024,
      medium: 'Light Installation',
      dimensions: 'Site Specific',
      price: 'Bespoke',
      status: 'Commission Available'
    },
    {
      id: 7,
      title: 'Reflections',
      image: 'https://images.unsplash.com/photo-1577720643272-265e434e8f7e?w=1200&h=1200&fit=crop',
      category: 'Photography',
      description: 'Exploring the boundary between reality and abstraction through water and mirror studies. A meditation on duality and perspective.',
      year: 2024,
      medium: 'Archival Pigment Print',
      dimensions: '90 x 120 cm',
      price: '$2,200',
      status: 'Available'
    },
    {
      id: 8,
      title: 'Flow',
      image: 'https://images.unsplash.com/photo-1578301978162-7a3c1e0a9a0b?w=1200&h=1200&fit=crop',
      category: 'Painting',
      description: 'A dynamic exploration of movement and energy. Layered gestures and color interactions create a visual rhythm that guides the viewer\'s eye.',
      year: 2023,
      medium: 'Oil on Canvas',
      dimensions: '120 x 90 cm',
      price: '$3,800',
      status: 'Available'
    }
  ];

  // Extract unique categories
  const categories = ['All', ...new Set(allArtworks.map(art => art.category))];

  // Filter artworks by category
  const filteredArtworks = activeCategory === 'All'
    ? allArtworks
    : allArtworks.filter(art => art.category === activeCategory);

  const handleArtworkClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleNavigateArtwork = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6">Gallery</h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl">
            A curated collection of recent works across multiple disciplines and mediums
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-white sticky top-20 z-40 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid
            artworks={filteredArtworks}
            onArtworkClick={handleArtworkClick}
          />
        </div>
      </section>

      {/* Artwork Modal */}
      {selectedIndex !== null && (
        <ArtworkModal
          artwork={filteredArtworks[selectedIndex]}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onNavigate={handleNavigateArtwork}
          totalArtworks={filteredArtworks.length}
          currentIndex={selectedIndex}
        />
      )}
    </div>
  );
}