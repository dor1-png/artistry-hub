import React, { useState } from 'react';
// createPageUrl no longer needed here

const projects = [
  {
    id: 'umbra',
    title: 'UMBRA',
    subtitle: 'Multidisciplinary Ensemble',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1516955656936-0c466ba80df2?w=1600&h=900&fit=crop&q=90',
    page: 'Umbra',
  },
  {
    id: 'retrospective',
    title: 'RETROSPECTIVE',
    subtitle: 'Theatronetto Festival',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1504475077527-e7e5a8b18e20?w=1600&h=900&fit=crop&q=90',
    page: null,
  },
  {
    id: 'eclecticism',
    title: 'ECLECTICISM',
    subtitle: 'Physical Theatre — Dir. Eden Weiss',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop&q=90',
    page: 'Eclecticism',
  },
];

export default function BoldGallery({ onProjectClick }) {
  const [hovered, setHovered] = useState(null);

  const handleClick = (project) => {
    if (onProjectClick) onProjectClick(project);
  };

  return (
    <section id="portfolio" className="bg-white" style={{ scrollMarginTop: '80px' }}>
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
        <h2 className="text-6xl font-light tracking-tight text-gray-900">Work</h2>
      </div>

      {/* Full-width stacked images */}
      <div className="flex flex-col">
        {projects.map((project) => {
          const isHovered = hovered === project.id;
          return (
            <div
              key={project.id}
              className="relative w-full overflow-hidden"
              style={{ height: '80vh', cursor: project.page ? 'pointer' : 'default' }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(project)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  filter: 'grayscale(30%)',
                }}
              />

              {/* Red atmospheric wash */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(160, 20, 20, 0.22)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  pointerEvents: 'none',
                }}
              />

              {/* Always-visible dark gradient at bottom */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Centered hover title */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  pointerEvents: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'inherit',
                    fontWeight: 300,
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    letterSpacing: '0.3em',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {project.title}
                </span>
              </div>

              {/* Bottom meta — always visible */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2.5rem 3rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  opacity: isHovered ? 0 : 1,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 300,
                      color: '#ffffff',
                      letterSpacing: '0.05em',
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.6)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginTop: '0.25rem',
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.2em',
                  }}
                >
                  {project.year}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}