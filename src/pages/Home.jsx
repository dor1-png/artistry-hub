import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';
import BoldGallery from '../components/BoldGallery';

const PROJECTS = [
  {
    id: 'third-person',
    title: 'Third Person',
    year: '2024',
    page: 'ThirdPerson',
    image: 'https://placehold.co/600x800/e5e5e5/999999?text=Third+Person',
    description: 'A contemporary circus development exploring the intersection of movement and physical limit. Originally performed at the Train Theater, this work investigates the precise boundary between technical virtuosity and embodied presence.',
    gallery: [
      'https://placehold.co/400x400/d4d4d4/999999?text=Third+Person+01',
      'https://placehold.co/400x400/c4c4c4/999999?text=Third+Person+02',
    ],
    videoUrl: null,
  },
  {
    id: 'eclecticism',
    title: 'Eclecticism',
    year: '2025',
    page: 'Eclecticism',
    image: 'https://placehold.co/600x800/e5e5e5/999999?text=Eclecticism',
    description: 'A physical theatre performance under the artistic direction of Eden Weiss, focusing on the precision of the performer\'s body as both instrument and subject. A collision of circus vocabulary with theatrical narrative.',
    gallery: [
      'https://placehold.co/400x400/d4d4d4/999999?text=Eclecticism+01',
      'https://placehold.co/400x400/c4c4c4/999999?text=Eclecticism+02',
    ],
    videoUrl: null,
  },
  {
    id: 'umbra',
    title: 'Umbra',
    year: '2025',
    page: 'Umbra',
    image: 'https://placehold.co/600x800/e5e5e5/999999?text=Umbra',
    description: 'A multidisciplinary ensemble performance exploring the boundary between presence and absence through shadow and light. The performer becomes silhouette, abstraction, and essence.',
    gallery: [
      'https://placehold.co/400x400/d4d4d4/999999?text=Umbra+01',
      'https://placehold.co/400x400/c4c4c4/999999?text=Umbra+02',
    ],
    videoUrl: null,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="w-full bg-white">
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
      {/* Hero Section — scrolls away naturally */}
      <div className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=1920&h=1080&fit=crop&q=95"
          alt="Dor Regev"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={22} color="rgba(255,255,255,0.5)" />
        </div>
      </div>

      {/* Content below the hero */}
      <div>

      {/* POV Section - The Statement */}
      <section id="pov" className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px', scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: Image - Height matches text block */}
            <div
              className="bg-gray-900 rounded-sm overflow-hidden h-full animate-slide-in-left"
            >
              <img
                src="https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=600&h=800&fit=crop&q=80&blend=https://images.unsplash.com/photo-1549887534-7ebf0ddc0146?w=600&h=800&fit=crop&blend_mode=multiply"
                alt="Umbra - Silhouette Performance"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Right: Philosophy Breakdown - 50/50 split */}
            <div className="space-y-12 md:space-y-10 flex flex-col justify-start animate-slide-in-right animation-delay-100">
              <p className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
                A Precise Breakdown
              </p>

              {/* The Discipline */}
              <div
                className="space-y-3 transition-opacity duration-1200"

              >
                <h3 className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase">
                  The Discipline
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-900">
                  Grounded in the rigorous physical standards of Contemporary Circus. The pursuit of technical precision—like the focus required for a two-minute handstand hold. Every movement measured, every muscle engaged.
                </p>
              </div>

              {/* The Narrative */}
              <div
                className="space-y-3 transition-opacity duration-1200"

              >
                <h3 className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase">
                  The Narrative
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-900">
                  Utilizing Physical Theatre to explore the boundary between presence and absence, the corporeal and the ephemeral. The body as text. Movement as language.
                </p>
              </div>

              {/* The Intersection */}
              <div
                className="space-y-3 transition-opacity duration-1200"

              >
                <h3 className="text-xs font-light tracking-[0.2em] text-gray-500 uppercase">
                  The Intersection
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-900">
                  A multidisciplinary approach that seeks innovation through the fusion of movement, light, and shadow. Where circus becomes theatre. Where precision becomes art.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-light text-gray-600 tracking-wide italic">
                  "Precision is the bridge between physical limit and narrative soul."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BoldGallery onProjectClick={(p) => setActiveProject(PROJECTS.find(r => r.id === p.id) || p)} />

      {/* 2026: The Current Dialogue Section */}
      <section className="py-32 px-8 bg-gray-50" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-light tracking-tight mb-32 text-gray-900 animate-fade-in-up">2026: The Current Dialogue</h2>

          {/* Active Project 1 */}
          <div
            className="mb-40 pb-12 border-b border-gray-300 animate-slide-in-left"

          >
            <h3 className="text-4xl font-light tracking-tight mb-6">Theatronetto Festival 2026</h3>
            <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
              Developing a new retrospective performance that bridges past works with future visions. A comprehensive exploration of artistic evolution and the continuous conversation between discipline, narrative, and innovation.
            </p>
            <p className="text-sm font-light text-gray-500 tracking-widest mt-8">UPCOMING</p>
          </div>

          {/* Active Project 2 */}
          <div
            className="animate-slide-in-right animation-delay-100"

          >
            <h3 className="text-4xl font-light tracking-tight mb-6">"Go Explain" at Tzavta Theater</h3>
            <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
              A new work created for the "Miketzaron" festival, continuing the exploration of physical narrative through the lens of contemporary performance. Investigating how the body articulates meaning beyond conventional language.
            </p>
            <p className="text-sm font-light text-gray-500 tracking-widest mt-8">IN DEVELOPMENT</p>
          </div>
        </div>
      </section>

      {/* Footer/CTA - Start a Dialogue */}
      <section id="contact" className="min-h-screen grid md:grid-cols-2 bg-white" style={{ paddingTop: '120px', scrollMarginTop: '80px' }}>
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
            <h3 className="text-5xl font-light tracking-tight mb-6">Start a Dialogue</h3>
            <p className="text-lg font-light text-gray-600 mb-12 leading-relaxed">
              I am available for performance bookings, creative consultancy on innovation, and collaborative inquiries.
            </p>
            <form className="space-y-8">
              <div className="space-y-3">
                <label className="block text-xs font-light tracking-widest text-gray-600">INQUIRY TYPE</label>
                <select className="w-full bg-transparent border-b border-gray-300 pb-3 text-sm font-light focus:outline-none focus:border-gray-800 transition-colors cursor-pointer">
                  <option>Performance Booking</option>
                  <option>Creative Consultancy</option>
                  <option>Collaboration</option>
                  <option>General Inquiry</option>
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

      {/* Download Section */}
      <section className="py-20 px-8 bg-white border-t border-gray-100">
        <div className="max-w-md mx-auto text-center" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <a
            href="/CV"
            className="inline-flex items-center gap-3 text-xs font-light tracking-[0.2em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300 group"
          >
            <span className="w-8 h-px bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300" />
            Download Portfolio / CV
            <span className="w-8 h-px bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300" />
          </a>
        </div>
      </section>

      </div>
    </div>
  );
}