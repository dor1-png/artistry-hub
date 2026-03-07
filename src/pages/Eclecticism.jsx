import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Eclecticism() {
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
    'https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1485579149c0-123123123123?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
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
      <section className="h-screen w-full overflow-hidden relative animate-fade-in">
        <img
          src="https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=1600&h=900&fit=crop"
          alt="Eclecticism"
          className="w-full h-full object-cover"
          style={{ opacity: Math.max(0.5, 1 - scrollY / 300) }}
        />
      </section>

      {/* Content Section */}
      <section className="py-32 px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div
              className="space-y-8 transition-opacity duration-1200 animate-fade-in-up"
              style={{ opacity: getOpacity(document.getElementById('content')?.offsetTop || 0) }}
            >
              <h1 className="text-6xl md:text-7xl font-light tracking-tight">Eclecticism</h1>
              
              <div className="space-y-6">
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  A collision of disciplines. Eclecticism is where circus vocabulary meets theatrical narrative. This work is a study in hybridity and the spaces between forms.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Drawing from Contemporary Circus techniques, Physical Theatre language, and performance art sensibilities, Eclecticism refuses genre. It celebrates the friction between different artistic traditions, finding beauty in the synthesis of seemingly incompatible practices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Year</p>
                  <p className="text-xl font-light text-gray-900">2023</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Duration</p>
                  <p className="text-xl font-light text-gray-900">18 minutes</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Disciplines</p>
                  <p className="text-xl font-light text-gray-900">Circus + Theatre</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Collaborators</p>
                  <p className="text-xl font-light text-gray-900">Ensemble</p>
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
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-32 px-8 bg-gray-50" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-light tracking-tight mb-12">Next</h3>
          <button
            onClick={() => navigate('/Umbra')}
            className="block w-full text-left group"
          >
            <div className="flex justify-between items-center py-8 border-b border-gray-300 group-hover:border-gray-900 transition-colors">
              <span className="text-2xl md:text-3xl font-light tracking-tight">Umbra</span>
              <span className="text-xs font-light tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors">VIEW</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}