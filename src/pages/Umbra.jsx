import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Umbra() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getOpacity = (elementOffsetTop) => {
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY + windowHeight;
    const distance = scrollPosition - elementOffsetTop;
    return Math.min(distance / 400, 1);
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1485579149c0-123123123123?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=800&h=600&fit=crop',
  ];

  return (
    <div className="w-full bg-white">
      {/* Back Button */}
      <div className="fixed top-24 left-8 z-40">
        <button
          onClick={() => navigate('/#portfolio')}
          className="flex items-center gap-2 text-xs font-light tracking-widest text-gray-600 hover:text-gray-900 transition-colors uppercase"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <section className="h-screen w-full overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=1600&h=900&fit=crop"
          alt="Umbra"
          className="w-full h-full object-cover grayscale"
          style={{ opacity: Math.max(0.5, 1 - scrollY / 300) }}
        />
      </section>

      {/* Content Section */}
      <section className="py-32 px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div
              className="space-y-8 transition-opacity duration-1200"
              style={{ opacity: getOpacity(document.getElementById('content')?.offsetTop || 0) }}
            >
              <h1 className="text-6xl md:text-7xl font-light tracking-tight">Umbra</h1>
              
              <div className="space-y-6">
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Shadow as subject. Umbra explores the boundary between presence and absence, the corporeal and the ephemeral through controlled darkness.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  In this work, light becomes a sculptural tool and shadow becomes the primary performer. By manipulating visibility and invisibility, the piece questions what it means to exist, to be seen, to be hidden. The performer becomes silhouette, abstraction, essence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Year</p>
                  <p className="text-xl font-light text-gray-900">2023</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Duration</p>
                  <p className="text-xl font-light text-gray-900">12 minutes</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Disciplines</p>
                  <p className="text-xl font-light text-gray-900">Performance Art</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Light Design</p>
                  <p className="text-xl font-light text-gray-900">Bespoke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light tracking-tight mb-20">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="bg-gray-200 aspect-[4/3] rounded-sm overflow-hidden transition-opacity duration-1200"
                style={{ opacity: getOpacity(document.getElementById('gallery')?.offsetTop || 0) }}
              >
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-32 px-8 bg-gray-50" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-light tracking-tight mb-12">Back to</h3>
          <button
            onClick={() => navigate('/#portfolio')}
            className="block w-full text-left group"
          >
            <div className="flex justify-between items-center py-8 border-b border-gray-300 group-hover:border-gray-900 transition-colors">
              <span className="text-2xl md:text-3xl font-light tracking-tight">Portfolio</span>
              <span className="text-xs font-light tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors">VIEW</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}