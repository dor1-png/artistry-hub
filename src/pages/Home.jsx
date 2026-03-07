import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

export default function Home() {
  const navigate = useNavigate();
  const [content, setContent] = useState({});
  const [contentIds, setContentIds] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const homeContent = await base44.entities.Content.filter({ section: 'home' });
        const contentMap = {};
        const idsMap = {};
        homeContent.forEach(item => {
          contentMap[item.key] = item.value;
          idsMap[item.key] = item.id;
        });
        setContent(contentMap);
        setContentIds(idsMap);
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  const handleEditStart = (key, value) => {
    setEditing(key);
    setEditValue(value);
  };

  const handleSave = async (key) => {
    try {
      const contentId = contentIds[key];
      if (contentId) {
        await base44.entities.Content.update(contentId, { value: editValue });
      } else {
        await base44.entities.Content.create({ key, value: editValue, type: 'text', section: 'home' });
      }
      setContent(prev => ({ ...prev, [key]: editValue }));
      setEditing(null);
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  };

  const EditableText = ({ contentKey, value, isLarge }) => {
    if (editing === contentKey) {
      return isLarge ? (
        <textarea
          autoFocus
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={() => handleSave(contentKey)}
          onKeyDown={(e) => e.key === 'Enter' && e.ctrlKey && handleSave(contentKey)}
          className="w-full bg-transparent border border-gray-300 p-2 text-lg md:text-xl font-light text-gray-600 focus:outline-none focus:border-gray-800 resize-none"
          rows="3"
        />
      ) : (
        <input
          autoFocus
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={() => handleSave(contentKey)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave(contentKey)}
          className="w-full bg-transparent border-b border-gray-800 pb-1 text-6xl md:text-7xl font-light focus:outline-none"
        />
      );
    }
    return (
      <span
        onClick={() => handleEditStart(contentKey, value)}
        className="cursor-pointer hover:opacity-70 transition-opacity"
        title="Click to edit"
      >
        {value}
      </span>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight">
              {content.hero_title || 'Where Art Meets Intention'}
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {content.hero_subtitle || 'Exploring the intersection of emotion and form through intentional creation.'}
            </p>
          </div>
          
          <button
            onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm font-light group cursor-pointer mt-8"
          >
            Explore Work
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Gallery Section - Link to Full Gallery */}
      <section id="gallery" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">Featured Work</h2>
            <p className="text-gray-600 font-light text-lg">A selection of recent pieces</p>
            <button
              onClick={() => navigate('/Gallery')}
              className="inline-flex items-center gap-2 text-sm font-light group mt-4"
            >
              View Full Gallery
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[...Array(3)].map((_, i) => {
              const showcase = [
                { title: 'Serenity', category: 'Digital', image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=600&h=600&fit=crop' },
                { title: 'Essence', category: 'Painting', image: 'https://images.unsplash.com/photo-1561214115-6d2f1b0b1b1f?w=600&h=600&fit=crop' },
                { title: 'Whispers', category: 'Photography', image: 'https://images.unsplash.com/photo-1578052869485-d7b4f4c7d1c0?w=600&h=600&fit=crop' }
              ];
              const artwork = showcase[i];
              return (
                <div
                  key={i}
                  className="group cursor-pointer"
                  onClick={() => navigate('/Gallery')}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-square mb-6">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-light text-sm">
                        View Gallery
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-light tracking-wide mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{artwork.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16">About</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
              <p>
                I am a multidisciplinary artist working across digital, traditional, and experimental mediums. My practice explores the subtle interplay between form, color, and human emotion.
              </p>
              <p>
                Each piece begins as a question—about perception, meaning, or connection. Through intentional mark-making and thoughtful composition, I seek to create spaces where viewers discover their own narratives.
              </p>
              <p>
                Based in the creative heart of the city, I spend my days in the studio, exploring new techniques and pushing the boundaries of my practice.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-medium tracking-widest text-gray-500">EXPERIENCE</h3>
                <p className="text-lg font-light">10+ years of creative practice</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium tracking-widest text-gray-500">EXHIBITIONS</h3>
                <p className="text-lg font-light">Featured in 20+ international galleries</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium tracking-widest text-gray-500">PRACTICE</h3>
                <p className="text-lg font-light">Digital, Painting, Photography, Sculpture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16">Get in Touch</h2>
          
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-light text-gray-600">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-lg font-light focus:outline-none focus:border-gray-800 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-light text-gray-600">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-lg font-light focus:outline-none focus:border-gray-800 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-light text-gray-600">Message</label>
              <textarea
                rows="5"
                className="w-full bg-transparent border-b border-gray-300 pb-3 text-lg font-light focus:outline-none focus:border-gray-800 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-4 text-sm font-light tracking-wide hover:bg-gray-700 transition-colors duration-300 mt-8"
            >
              Send Message
            </button>
          </form>

          <div className="mt-20 pt-12 border-t border-gray-200 space-y-4 text-center text-sm font-light text-gray-600">
            <p>Or reach out directly:</p>
            <p>hello@artistry.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </section>


    </div>
  );
}