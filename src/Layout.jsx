import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const isHome = currentPageName === 'Home';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPageName]);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    if (!isHome) {
      navigate(createPageUrl('Home'));
      // slight delay to allow page to mount before scrolling
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setIsMenuOpen(false);
    navigate(createPageUrl('Home'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Work', href: '#portfolio' },
    { label: 'POV', href: '#pov' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-gray-100 shadow-none'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          {/* Logo — Home button */}
          <button
            onClick={goHome}
            className={`text-sm font-light tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60 ${
              scrolled ? 'text-gray-900' : 'text-gray-900'
            }`}
          >
            HOME
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-xs font-light tracking-[0.18em] uppercase text-gray-800 group transition-opacity duration-300 hover:opacity-60"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Link
              to={createPageUrl('CV')}
              className="relative text-xs font-light tracking-[0.18em] uppercase text-gray-800 group transition-opacity duration-300 hover:opacity-60"
            >
              CV
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-800 transition-all duration-300 group-hover:w-full" />
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
                onClick={() => scrollToSection(item.href)}
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

      {/* Main Content */}
      <main className="pt-0">
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
    </div>
  );
}