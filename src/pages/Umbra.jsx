import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Umbra() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    'https://placehold.co/800x600/e5e5e5/999999?text=Umbra+01',
    'https://placehold.co/800x600/d4d4d4/999999?text=Umbra+02',
    'https://placehold.co/800x600/c4c4c4/999999?text=Umbra+03',
    'https://placehold.co/800x600/b4b4b4/999999?text=Umbra+04',
  ];

  return (
    <div className="w-full bg-white">

      {/* Hero */}
      <section className="h-screen w-full overflow-hidden relative">
        <img
          src="https://placehold.co/1600x900/1a1a1a/666666?text=Umbra+—+Hero"
          alt="Umbra"
          className="w-full h-full object-cover grayscale"
          style={{ opacity: Math.max(0.4, 1 - scrollY / 400) }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        <div className="absolute bottom-16 left-8 md:left-20">
          <p className="text-xs font-light tracking-[0.25em] text-white/70 uppercase mb-3">2025 — Ensemble Production</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-none">Umbra</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-8" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
                Shadow as subject. Light as sculptor. The performer becomes silhouette, abstraction, essence.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Umbra begins in darkness. Not the comfortable darkness of a theatre before the show, but an active, present darkness — one that shapes and is shaped. Light enters slowly, and with it, the performer. Or perhaps: the shadow enters, and the performer is what remains.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                This multidisciplinary ensemble work explores the boundary between presence and absence, the corporeal and the ephemeral. By manipulating visibility itself — what is shown, withheld, half-revealed — the piece asks what it means to exist in front of another.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                The ensemble work required a complete reimagining of spatial language. Each body became a light instrument, responding to and resisting the designed illumination. The choreography was inseparable from the lighting design — one did not serve the other; they were co-equal authors of meaning.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { label: 'Year', value: '2025' },
                { label: 'Duration', value: '12 minutes' },
                { label: 'Format', value: 'Ensemble' },
                { label: 'Disciplines', value: 'Performance Art · Dance · Circus' },
                { label: 'Direction', value: 'Dor Regev' },
                { label: 'Light Design', value: 'Bespoke / Custom Rig' },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-1 border-b border-gray-100 pb-4">
                  <p className="text-xs font-light tracking-[0.2em] text-gray-400 uppercase">{label}</p>
                  <p className="text-base font-light text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Embed */}
      <section className="px-8 bg-gray-50" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-8">Documentation</p>
          <div className="aspect-video bg-gray-900 rounded-sm overflow-hidden flex items-center justify-center">
            {/* Replace src with your real video embed URL e.g. https://player.vimeo.com/video/YOUR_ID */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center mx-auto">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-gray-400 ml-1" />
              </div>
              <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Video — Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Note */}
      <section className="px-8 py-32 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-12">Process</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-light tracking-tight">Light as Language</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                The development of Umbra began not in a rehearsal studio but in conversation with a lighting designer. Before a single movement was set, we spent weeks exploring what shadow could do — how it could carry narrative weight, emotional temperature, structural logic.
              </p>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                We discovered that shadow is never neutral. Every shadow has a direction, a density, a mood. The body in shadow is not absent — it is more present in some ways, stripped of detail and reduced to pure form.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-light tracking-tight">Presence Without Visibility</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                A key challenge: how do you perform presence when you are not visible? The ensemble spent weeks training in complete darkness — developing spatial awareness, sensitivity to each other's proximity, a new kind of listening through the body rather than through sight.
              </p>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                What emerged was something unexpected: in darkness, the audience leaned forward. Invisibility created hunger. The moment of revelation — when a body emerged from shadow — was charged with accumulated longing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-8 bg-gray-50" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-12">Gallery</p>
          <div className="grid md:grid-cols-2 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className={`bg-gray-200 rounded-sm overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-[16/7]' : 'aspect-[4/3]'}`}>
                <img src={src} alt={`Umbra ${i + 1}`} className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-12">Next</p>
          <button onClick={() => navigate(createPageUrl('ThirdPerson'))} className="block w-full text-left group">
            <div className="flex justify-between items-center py-8 border-b border-gray-200 group-hover:border-gray-900 transition-colors duration-300">
              <span className="text-3xl md:text-4xl font-light tracking-tight">Third Person</span>
              <span className="text-xs font-light tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors uppercase">View →</span>
            </div>
          </button>
          <button onClick={() => navigate(createPageUrl('Home'))} className="block w-full text-left group mt-0">
            <div className="flex justify-between items-center py-8 border-b border-gray-200 group-hover:border-gray-900 transition-colors duration-300">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-gray-400">All Work</span>
              <span className="text-xs font-light tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors uppercase">View →</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}