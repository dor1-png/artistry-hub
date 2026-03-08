import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [fadeKey, setFadeKey] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = currentPageName === 'Home';
  const isCV = currentPageName === 'CV';

  // Track scroll position for header style + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section on home page
      if (isHome) {
        const sections = ['portfolio', 'pov', 'contact'];
        let current = null;
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) current = id;
          }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Trigger fade-in on page change & scroll to top instantly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setFadeKey(k => k + 1);
    setActiveSection(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (!isHome) {
      // Cross-fade: navigate then instant-top the new page (handled by useEffect above)
      navigate(createPageUrl('Home'));
      // After navigation, scroll to section with a brief delay
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setIsMenuOpen(false);
    if (!isHome) {
      navigate(createPageUrl('Home'));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Work', sectionId: 'portfolio' },
    { label: 'POV', sectionId: 'pov' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const isNavActive = (sectionId) => {
    if (!isHome) return false;
    return activeSection === sectionId;
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-gray-100'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          {/* Logo — Home button */}
          <button
            onClick={goHome}
            className="text-sm font-light tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60 text-gray-900"
          >
            HOME
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map(item => {
              const active = isNavActive(item.sectionId);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`relative text-xs font-light tracking-[0.18em] uppercase transition-all duration-300 group ${
                    active ? 'text-gray-900 opacity-100' : 'text-gray-800 hover:opacity-60'
                  }`}
                >
                  {item.label}
                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gray-800 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
            <Link
              to={createPageUrl('CV')}
              onClick={() => {}} // instant-top handled by useEffect
              className={`relative text-xs font-light tracking-[0.18em] uppercase transition-all duration-300 group ${
                isCV ? 'text-gray-900 opacity-100' : 'text-gray-800 hover:opacity-60'
              }`}
            >
              CV
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gray-800 transition-all duration-300 ${
                  isCV ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900 transition-opacity hover:opacity-60"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            isMenuOpen ? 'max-h-80 border-t border-gray-100' : 'max-h-0'
          } bg-white`}
        >
          <div className="flex flex-col gap-0 px-8 py-6">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-left text-xs font-light tracking-[0.18em] uppercase text-gray-800 py-3 border-b border-gray-50 hover:opacity-60 transition-opacity"
              >
                {item.label}
              </button>
            ))}
            <Link
              to={createPageUrl('CV')}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-light tracking-[0.18em] uppercase text-gray-800 py-3 hover:opacity-60 transition-opacity"
            >
              CV
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content — soft cross-fade on page change */}
      <main
        key={fadeKey}
        className="pt-0"
        style={{ animation: 'pageFadeIn 0.4s ease-out both' }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-light text-gray-400 tracking-widest">
          <button onClick={goHome} className="hover:opacity-60 transition-opacity uppercase">
            Dor Regev
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 text-gray-300 hover:text-gray-900 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              <span className="text-[9px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Instagram</span>
            </a>
            <span className="w-px h-4 bg-gray-200" />
            <a
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 text-gray-300 hover:text-gray-900 transition-colors duration-300"
              aria-label="SoundCloud"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 10.5 Q1 8 3 8 Q3 4 7 4 Q8 4 9 4.5"/>
                <path d="M9 4.5 Q10 2 12 2 Q15 2 15 5.5"/>
                <path d="M15 5.5 Q15.5 5 16.5 5 Q19 5 19 8 Q21 8 21 10.5 Q21 13 18.5 13 L3.5 13 Q1 13 1 10.5 Z"/>
              </svg>
              <span className="text-[9px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">SoundCloud</span>
            </a>
          </div>

          <p>© 2026. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}