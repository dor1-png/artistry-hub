import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ProjectModal({ project, onClose }) {
  const navigate = useNavigate();

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto py-8"
      style={{ animation: 'pageFadeIn 0.35s ease-out both' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto mx-4 rounded-sm flex flex-col md:flex-row">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-gray-400 hover:text-gray-900 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Left: Media */}
        <div className="md:w-1/2 bg-gray-100 flex-shrink-0">
          {project.videoUrl ? (
            <iframe
              src={project.videoUrl}
              title={project.title}
              allow="autoplay; fullscreen"
              className="w-full h-72 md:h-full"
              style={{ minHeight: '360px' }}
              frameBorder="0"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-full object-cover"
              style={{ minHeight: '360px' }}
            />
          )}
        </div>

        {/* Right: Info */}
        <div className="md:w-1/2 flex flex-col justify-between p-10 md:p-14">
          <div>
            <p className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-4">{project.year}</p>
            <h2 className="text-4xl font-light tracking-tight mb-6">{project.title}</h2>
            <p className="text-base font-light text-gray-600 leading-relaxed mb-8">{project.description}</p>

            {/* Extra gallery images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-8">
                {project.gallery.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-full aspect-square object-cover rounded-sm" />
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => { onClose(); navigate(createPageUrl(project.page)); }}
            className="flex items-center gap-2 text-xs font-light tracking-widest uppercase text-gray-800 border-b border-gray-800 pb-1 w-fit hover:opacity-50 transition-opacity"
          >
            Full Project <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}