import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Eclecticism() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    'https://placehold.co/800x600/e5e5e5/999999?text=Eclecticism+01',
    'https://placehold.co/800x600/d4d4d4/999999?text=Eclecticism+02',
    'https://placehold.co/800x600/c4c4c4/999999?text=Eclecticism+03',
    'https://placehold.co/800x600/b4b4b4/999999?text=Eclecticism+04',
  ];

  return (
    <div className="w-full bg-white">

      {/* Hero */}
      <section className="h-screen w-full overflow-hidden relative">
        <img
          src="https://placehold.co/1600x900/e5e5e5/999999?text=Eclecticism+—+Hero"
          alt="Eclecticism"
          className="w-full h-full object-cover"
          style={{ opacity: Math.max(0.4, 1 - scrollY / 400) }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        <div className="absolute bottom-16 left-8 md:left-20">
          <p className="text-xs font-light tracking-[0.25em] text-white/70 uppercase mb-3">2025 — Dir. Eden Weiss</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white leading-none">Eclecticism</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 px-8" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
                A collision of disciplines. Where circus vocabulary meets theatrical narrative, and refuses to resolve.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Created under the artistic direction of Eden Weiss, Eclecticism is a study in productive tension. The work refuses the comfort of a single genre — it borrows from Contemporary Circus, Physical Theatre, and performance art, placing each tradition in conversation with the others without privileging any one of them.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                The result is a performance that feels simultaneously familiar and alien. The audience recognizes elements — a handstand, a theatrical pause, a direct address — but the context shifts their meaning. Precision becomes poetry. Technique becomes texture.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Eclecticism is not about everything being permitted. It is about knowing each tradition well enough to break it with intention. The performance demands fluency before it can be productive violation.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { label: 'Year', value: '2025' },
                { label: 'Duration', value: '18 minutes' },
                { label: 'Direction', value: 'Eden Weiss' },
                { label: 'Performer', value: 'Dor Regev' },
                { label: 'Disciplines', value: 'Circus · Theatre · Performance Art' },
                { label: 'Collaborators', value: 'Ensemble Cast' },
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
              <h3 className="text-3xl font-light tracking-tight">The Collaboration</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                Working with Eden Weiss opened a productive discomfort. Her background in theatre and mine in circus meant we were constantly translating — finding shared language, discovering where our vocabularies overlapped and where they stubbornly refused to.
              </p>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                Rehearsals were structured conversations. We would set a task — perform this action as a circus act, then perform it as a theatrical moment — and interrogate the difference. What changed? What remained? Where was the truth?
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-light tracking-tight">The Friction</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                The piece's title was chosen late in the process. We had been calling it "The Study" but that felt too academic. Eclecticism captures something closer — it is both a method and a position. A claim that diversity of form is itself meaningful.
              </p>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                The final structure emerged from what survived repeated questioning: what could not be reduced to a single discipline without losing its essence. These moments of irreducibility became the spine of the work.
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
                <img src={src} alt={`Eclecticism ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-12">Next</p>
          <button onClick={() => navigate(createPageUrl('Umbra'))} className="block w-full text-left group">
            <div className="flex justify-between items-center py-8 border-b border-gray-200 group-hover:border-gray-900 transition-colors duration-300">
              <span className="text-3xl md:text-4xl font-light tracking-tight">Umbra</span>
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