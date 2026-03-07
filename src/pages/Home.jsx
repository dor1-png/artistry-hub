import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
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

  return (
    <div className="w-full bg-white">
      {/* Hero Section - The Threshold */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-8 py-32 relative overflow-hidden">
        <div className="max-w-4xl text-center space-y-16">
          <div className="space-y-12" style={{ opacity: Math.max(0.3, 1 - scrollY / 500) }}>
            <div className="space-y-6">
              <h1 className="text-8xl md:text-9xl font-light tracking-tight leading-none">
                DOR
                <br />
                REGEV
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wide text-gray-600 mt-8">
                Multidisciplinary Artist
              </p>
              <div className="flex justify-center gap-4 text-sm font-light tracking-widest text-gray-500 mt-6">
                <span>Theatre</span>
                <span>•</span>
                <span>Contemporary Circus</span>
                <span>•</span>
                <span>Performance</span>
              </div>
            </div>

            <button className="inline-block mt-12 border border-gray-800 px-12 py-4 text-sm font-light tracking-widest hover:bg-gray-800 hover:text-white transition-all duration-500">
              ENTER THE PROCESS
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* POV Section - The Statement */}
      <section className="py-32 px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="space-y-8 transition-opacity duration-1200"
            style={{ opacity: getOpacity(document.getElementById('pov')?.offsetTop || 0) }}
          >
            <p className="text-4xl md:text-5xl font-light leading-relaxed tracking-tight text-gray-900">
              Precision is the bridge between physical limit and narrative soul.
            </p>
            <p className="text-lg font-light text-gray-500 tracking-wide mt-12">
              Where discipline meets artistic intent. Where the body speaks what words cannot.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section - The Body */}
      <section id="portfolio" className="py-32 px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-light tracking-tight mb-32 text-gray-900">Work</h2>

          {/* Project 1 - Left Aligned */}
          <div className="mb-40 grid md:grid-cols-2 gap-16 items-center">
            <div
              className="transition-opacity duration-1200"
              style={{ opacity: getOpacity(document.getElementById('project1')?.offsetTop || 0) }}
            >
              <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop"
                  alt="Third Person"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="transition-opacity duration-1200"
              style={{ opacity: getOpacity(document.getElementById('project1')?.offsetTop || 0) }}
            >
              <h3 className="text-5xl font-light tracking-tight mb-6">Third Person</h3>
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                An investigation into perspective and embodiment. Exploring the distance between performer and observer through ritualistic movement.
              </p>
              <p className="text-sm font-light text-gray-500 tracking-widest">2024</p>
            </div>
          </div>

          {/* Project 2 - Right Aligned */}
          <div className="mb-40 grid md:grid-cols-2 gap-16 items-center md:direction-rtl">
            <div
              className="transition-opacity duration-1200 md:order-2"
              style={{ opacity: getOpacity(document.getElementById('project2')?.offsetTop || 0) }}
            >
              <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=600&h=800&fit=crop"
                  alt="Eclecticism"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="transition-opacity duration-1200 md:order-1"
              style={{ opacity: getOpacity(document.getElementById('project2')?.offsetTop || 0) }}
            >
              <h3 className="text-5xl font-light tracking-tight mb-6">Eclecticism</h3>
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                A collision of disciplines. Where circus vocabulary meets theatrical narrative. A study in hybridity and the spaces between forms.
              </p>
              <p className="text-sm font-light text-gray-500 tracking-widest">2023</p>
            </div>
          </div>

          {/* Project 3 - Left Aligned */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="transition-opacity duration-1200"
              style={{ opacity: getOpacity(document.getElementById('project3')?.offsetTop || 0) }}
            >
              <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=600&h=800&fit=crop"
                  alt="Umbra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="transition-opacity duration-1200"
              style={{ opacity: getOpacity(document.getElementById('project3')?.offsetTop || 0) }}
            >
              <h3 className="text-5xl font-light tracking-tight mb-6">Umbra</h3>
              <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                Shadow as subject. Exploring the boundary between presence and absence, the corporeal and the ephemeral through controlled darkness.
              </p>
              <p className="text-sm font-light text-gray-500 tracking-widest">2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/CTA - The Dialogue */}
      <section className="min-h-screen grid md:grid-cols-2 bg-white" style={{ paddingTop: '120px' }}>
        {/* Left: Imagery */}
        <div className="bg-gray-200 aspect-auto md:aspect-auto min-h-screen md:min-h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=800&h=1200&fit=crop"
            alt="Behind the scenes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Inquiry Form */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-0" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <div className="max-w-md">
            <h3 className="text-5xl font-light tracking-tight mb-12">Get in Touch</h3>
            <form className="space-y-8">
              <div className="space-y-3">
                <label className="block text-xs font-light tracking-widest text-gray-600">INQUIRY TYPE</label>
                <select className="w-full bg-transparent border-b border-gray-300 pb-3 text-sm font-light focus:outline-none focus:border-gray-800 transition-colors cursor-pointer">
                  <option>Performances</option>
                  <option>Consultancy</option>
                  <option>Collaboration</option>
                  <option>General</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-light tracking-widest text-gray-600">NAME</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-sm font-light focus:outline-none focus:border-gray-800 transition-colors"
                  placeholder=""
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-light tracking-widest text-gray-600">EMAIL</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-sm font-light focus:outline-none focus:border-gray-800 transition-colors"
                  placeholder=""
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-light tracking-widest text-gray-600">MESSAGE</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 pb-3 text-sm font-light focus:outline-none focus:border-gray-800 transition-colors resize-none"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="w-full border border-gray-800 py-4 text-xs font-light tracking-widest hover:bg-gray-800 hover:text-white transition-all duration-500 mt-12"
              >
                SEND
              </button>
            </form>

            <div className="mt-16 space-y-4 text-xs font-light text-gray-500 tracking-widest">
              <p>DOR REGEV</p>
              <p>hello@dorregev.com</p>
              <p>+972 (0) 54 123 4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}