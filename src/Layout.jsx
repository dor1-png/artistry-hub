import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#portfolio' },
    { label: 'POV', href: '#pov' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isHome = currentPageName === 'Home';

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-tight cursor-pointer">
            DOR REGEV
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 text-xs font-light tracking-widest">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="transition-colors duration-300 hover:text-gray-600 uppercase"
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
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="flex flex-col gap-6 px-8 py-6 text-xs font-light tracking-widest uppercase">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left transition-colors hover:text-gray-600"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center text-xs font-light text-gray-500 tracking-widest">
          <p>© 2026 DOR REGEV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}