import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectModal from '../components/ProjectModal';

const PROJECTS = [
  {
    id: 'third-person',
    title: 'Third Person',
    year: '2024',
    page: 'ThirdPerson',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&h=800&fit=crop',
    description: 'A contemporary circus development exploring the intersection of movement and physical limit. Originally performed at the Train Theater, this work investigates the precise boundary between technical virtuosity and embodied presence.',
    gallery: [
      'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=400&fit=crop',
    ],
    videoUrl: null,
  },
  {
    id: 'eclecticism',
    title: 'Eclecticism',
    year: '2025',
    page: 'Eclecticism',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=800&fit=crop',
    description: 'A physical theatre performance under the artistic direction of Eden Weiss, focusing on the precision of the performer\'s body as both instrument and subject. A collision of circus vocabulary with theatrical narrative.',
    gallery: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=400&fit=crop',
    ],
    videoUrl: null,
  },
  {
    id: 'umbra',
    title: 'Umbra',
    year: '2025',
    page: 'Umbra',
    image: 'https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=600&h=800&fit=crop',
    description: 'A multidisciplinary ensemble performance exploring the boundary between presence and absence through shadow and light. The performer becomes silhouette, abstraction, and essence.',
    gallery: [
      'https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    ],
    videoUrl: null,
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

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
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
      {/* Hero Section - The Threshold */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-8 py-32 relative overflow-hidden">
        <div className="max-w-4xl text-center space-y-16">
          <div className="space-y-12" style={{ opacity: Math.max(0.3, 1 - scrollY / 500) }}>
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-8xl md:text-9xl font-light tracking-tight leading-none">
                DOR
                <br />
                REGEV
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wide text-gray-600 mt-8 animate-fade-in-up animation-delay-100">
                Multidisciplinary Artist
              </p>
              <div className="flex justify-center gap-4 text-sm font-light tracking-widest text-gray-500 mt-6 animate-fade-in-up animation-delay-200">
                <span>Theatre</span>
                <span>•</span>
                <span>Contemporary Circus</span>
                <span>•</span>
                <span>Performance</span>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('pov');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block mt-12 border border-gray-800 px-12 py-4 text-sm font-light tracking-widest hover:bg-gray-800 hover:text-white transition-all duration-500 animate-fade-in-up animation-delay-300"
            >
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
      <section id="pov" className="bg-white" style={{ paddingTop: '120px', paddingBottom: '120px', scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: Image - Height matches text block */}
            <div
              className="bg-gray-900 rounded-sm overflow-hidden transition-opacity duration-1200 h-full animate-slide-in-left"
              style={{ opacity: getOpacity(document.getElementById('pov')?.offsetTop || 0) }}
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
                style={{ opacity: getOpacity(document.getElementById('pov')?.offsetTop || 200) }}
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
                style={{ opacity: getOpacity(document.getElementById('pov')?.offsetTop || 400) }}
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
                style={{ opacity: getOpacity(document.getElementById('pov')?.offsetTop || 600) }}
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

      {/* Portfolio Section - The Body */}
      <section id="portfolio" className="py-32 px-8 bg-white" style={{ paddingTop: '120px', paddingBottom: '120px', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-light tracking-tight mb-32 text-gray-900 animate-fade-in-up">Work</h2>

          {/* Project 1 - Third Person */}
          <div className="mb-48 w-full text-left group scroll-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-opacity duration-1200 animate-slide-in-left cursor-pointer"
                style={{ opacity: getOpacity(document.getElementById('project1')?.offsetTop || 0) }}
                onClick={() => setActiveProject(PROJECTS[0])}
              >
                <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop"
                    alt="Third Person"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-xs tracking-widest uppercase opacity-0 hover:opacity-100 transition-opacity duration-300">View</span>
                  </div>
                </div>
              </div>
              <div
                className="transition-opacity duration-1200 animate-slide-in-right animation-delay-100"
                style={{ opacity: getOpacity(document.getElementById('project1')?.offsetTop || 0) }}
              >
                <h3 className="text-5xl font-light tracking-tight mb-6 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => navigate('/ThirdPerson')}>Third Person</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  A contemporary circus development exploring the intersection of movement and physical limit. Originally performed at the Train Theater, this work investigates the precise boundary between technical virtuosity and embodied presence.
                </p>
                <p className="text-sm font-light text-gray-500 tracking-widest">2024</p>
              </div>
            </div>
          </div>

          {/* Project 2 - Eclecticism */}
          <div className="mb-48 w-full text-left group scroll-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-center md:direction-rtl">
              <div
                className="transition-opacity duration-1200 md:order-2 animate-slide-in-right cursor-pointer"
                style={{ opacity: getOpacity(document.getElementById('project2')?.offsetTop || 0) }}
                onClick={() => setActiveProject(PROJECTS[1])}
              >
                <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=600&h=800&fit=crop"
                    alt="Eclecticism"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
              <div
                className="transition-opacity duration-1200 md:order-1 animate-slide-in-left animation-delay-100"
                style={{ opacity: getOpacity(document.getElementById('project2')?.offsetTop || 0) }}
              >
                <h3 className="text-5xl font-light tracking-tight mb-6 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => navigate('/Eclecticism')}>Eclecticism</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  A physical theatre performance under the artistic direction of Eden Weiss, focusing on the precision of the performer's body as both instrument and subject. A collision of circus vocabulary with theatrical narrative.
                </p>
                <p className="text-sm font-light text-gray-500 tracking-widest">2025</p>
              </div>
            </div>
          </div>

          {/* Project 3 - Umbra */}
          <div className="mb-48 w-full text-left group scroll-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className="transition-opacity duration-1200 animate-slide-in-left cursor-pointer"
                style={{ opacity: getOpacity(document.getElementById('project3')?.offsetTop || 0) }}
                onClick={() => setActiveProject(PROJECTS[2])}
              >
                <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=600&h=800&fit=crop"
                    alt="Umbra"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
              <div
                className="transition-opacity duration-1200 animate-slide-in-right animation-delay-100"
                style={{ opacity: getOpacity(document.getElementById('project3')?.offsetTop || 0) }}
              >
                <h3 className="text-5xl font-light tracking-tight mb-6 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => navigate('/Umbra')}>Umbra</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  A multidisciplinary ensemble performance exploring the boundary between presence and absence through shadow and light. The performer becomes silhouette, abstraction, and essence.
                </p>
                <p className="text-sm font-light text-gray-500 tracking-widest">2025</p>
              </div>
            </div>
          </div>

          {/* Project 4 - Gray Elephant */}
          <div className="w-full text-left group scroll-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-center md:direction-rtl">
              <div
                className="transition-opacity duration-1200 md:order-2 animate-slide-in-right"
                style={{ opacity: getOpacity(document.getElementById('project4')?.offsetTop || 0) }}
              >
                <div className="bg-gray-200 aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop"
                    alt="Gray Elephant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div
                className="transition-opacity duration-1200 md:order-1 animate-slide-in-left animation-delay-100"
                style={{ opacity: getOpacity(document.getElementById('project4')?.offsetTop || 0) }}
              >
                <h3 className="text-5xl font-light tracking-tight mb-6">Gray Elephant</h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  A solo project developed under the artistic guidance of Yael Citron, marking a pivotal moment in personal artistic inquiry. An exploration of isolation, presence, and the weight of silence.
                </p>
                <p className="text-sm font-light text-gray-500 tracking-widest">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026: The Current Dialogue Section */}
      <section className="py-32 px-8 bg-gray-50" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-light tracking-tight mb-32 text-gray-900 animate-fade-in-up">2026: The Current Dialogue</h2>

          {/* Active Project 1 */}
          <div
            className="mb-40 pb-12 border-b border-gray-300 animate-slide-in-left"
            style={{ opacity: getOpacity(document.getElementById('active1')?.offsetTop || 0) }}
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
            style={{ opacity: getOpacity(document.getElementById('active2')?.offsetTop || 0) }}
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
  );
}