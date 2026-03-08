import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ThirdPerson() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    'https://placehold.co/800x600/e5e5e5/999999?text=Third+Person+01',
    'https://placehold.co/800x600/d4d4d4/999999?text=Third+Person+02',
    'https://placehold.co/800x600/c4c4c4/999999?text=Third+Person+03',
    'https://placehold.co/800x600/b4b4b4/999999?text=Third+Person+04',
  ];

  return (
    <div className="w-full bg-white">

      {/* Hero */}
      <section className="h-screen w-full overflow-hidden relative">
        <img
          src="https://placehold.co/1600x900/e5e5e5/999999?text=Third+Person+—+Hero"
          alt="Third Person"
          className="w-full h-full object-cover"
          style={{ opacity: Math.max(0.4, 1 - scrollY / 400) }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        <div className="absolute bottom-16 left-8 md:left-20">
          <p className="text-xs font-light tracking-[0.25em] text-white/70 uppercase mb-3">2024 — Train Theater, Jerusalem</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-none">Third Person</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-8" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
                An investigation into perspective, embodiment, and the distance between performer and observer.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Third Person began as a question: what does it mean to watch a body? And what does the body do when it knows it is being watched? This work navigates the liminal space between self-consciousness and unconscious motion — where control dissolves into presence.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Through a vocabulary rooted in Contemporary Circus precision and Physical Theatre sensitivity, the piece constructs a dialogue between stillness and velocity. Every gesture is earned. Every silence is intentional. The audience is not passive — they are implicated. Their watching is part of the performance.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Originally developed and premiered at the Train Theater in Jerusalem, Third Person has since been presented at multiple festival contexts. Each iteration responds to its venue, making space a co-creator of meaning.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { label: 'Year', value: '2024' },
                { label: 'Duration', value: '14 minutes' },
                { label: 'Venue', value: 'Train Theater, Jerusalem' },
                { label: 'Disciplines', value: 'Physical Theatre · Circus' },
                { label: 'Direction', value: 'Dor Regev' },
                { label: 'Light Design', value: 'TBD' },
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
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center">
            {/* Replace src with your real video embed URL e.g. https://player.vimeo.com/video/YOUR_ID */}
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center mx-auto">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-gray-500 ml-1" />
              </div>
              <p className="text-xs font-light tracking-widest text-gray-400 uppercase">Video — Coming Soon</p>
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
              <h3 className="text-3xl font-light tracking-tight">The Making</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                The process of Third Person was inseparable from its subject. How do you rehearse being watched? How do you train yourself to forget the audience while remaining acutely aware of them?
              </p>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                Weeks were spent in studios with mirrors covered — working without external reflection, building an internal compass. Then performing with full audience exposure, integrating that self-awareness without letting it become performance.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-light tracking-tight">The Intention</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                The title refers to the grammatical third person — he, she, they — the observed subject. It is not a monologue but a portrait. The performer is simultaneously subject and artist, watching themselves being watched.
              </p>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                The final image of the piece — a single beam of light, a body suspended in absolute stillness — asks the audience to sit with discomfort, with the responsibility of their own gaze.
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
                <img src={src} alt={`Third Person ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-12">Next</p>
          <button onClick={() => navigate(createPageUrl('Eclecticism'))} className="block w-full text-left group">
            <div className="flex justify-between items-center py-8 border-b border-gray-200 group-hover:border-gray-900 transition-colors duration-300">
              <span className="text-3xl md:text-4xl font-light tracking-tight">Eclecticism</span>
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