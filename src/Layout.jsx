import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', id: 'hero', page: '/' },
    { label: 'Gallery', page: '/Gallery' },
    { label: 'Artist', page: '/Artist' },
    { label: 'About', id: 'about', page: '/' },
    { label: 'Contact', page: '/Contact' }
  ];

  const scrollToSection = (id, page) => {
    setIsMenuOpen(false);
    if (page && page !== '/') {
      navigate(page);
      return;
    }
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-wide cursor-pointer" onClick={() => scrollToSection('hero')}>
            ARTISTRY
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-light">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id, item.page)}
                className="transition-colors duration-300 hover:text-gray-500"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200/50">
            <div className="flex flex-col gap-4 px-6 py-6 text-sm font-light">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id, item.page)}
                  className="text-left transition-colors hover:text-gray-500"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200/50 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm font-light text-gray-600">
          <p>© 2026 Artistry. All works created with intention.</p>
        </div>
      </footer>
    </div>
  );
}