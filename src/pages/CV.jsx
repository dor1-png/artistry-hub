import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const cvData = {
  education: [
    {
      years: '2021 — 2025',
      institution: 'School for Contemporary Circus & Physical Theatre',
      degree: 'B.F.A. in Contemporary Circus Arts',
      location: 'Tel Aviv, Israel',
    },
    {
      years: '2019 — 2021',
      institution: 'Tmuna Theatre',
      degree: 'Physical Theatre & Devising Training',
      location: 'Tel Aviv, Israel',
    },
  ],
  performances: [
    { year: '2026', title: '"Go Explain"', role: 'Performer / Creator', venue: 'Tzavta Theater — Miketzaron Festival' },
    { year: '2026', title: 'Theatronetto Festival', role: 'Performer / Creator', venue: 'Retrospective Programme' },
    { year: '2025', title: 'Umbra', role: 'Performer / Co-creator', venue: 'Ensemble Production' },
    { year: '2025', title: 'Eclecticism', role: 'Performer', venue: 'Dir. Eden Weiss' },
    { year: '2024', title: 'Third Person', role: 'Performer / Creator', venue: 'Train Theater, Jerusalem' },
    { year: '2022', title: 'Gray Elephant', role: 'Solo Performer / Creator', venue: 'Dir. Yael Citron' },
  ],
  awards: [
    { year: '2025', title: 'Excellence in Physical Performance', body: 'Israeli Theatre Association' },
    { year: '2024', title: 'Best New Circus Work', body: 'Train Theater Annual Awards' },
    { year: '2022', title: 'Emerging Artist Grant', body: 'Ministry of Culture & Sport, Israel' },
  ],
  exhibitions: [
    { year: '2025', title: 'Body as Text — Group Exhibition', venue: 'Suzanne Dellal Centre, Tel Aviv' },
    { year: '2024', title: 'Movement & Light', venue: 'Jerusalem Arts Festival' },
    { year: '2023', title: 'Borders of the Body', venue: 'Tmuna Theatre Gallery, Tel Aviv' },
  ],
  skills: [
    'Contemporary Circus', 'Handbalancing', 'Acrobatics',
    'Physical Theatre', 'Devising', 'Movement Direction',
    'Aerial Arts', 'Contact Improvisation', 'Choreography',
  ],
  languages: [
    { lang: 'Hebrew', level: 'Native' },
    { lang: 'English', level: 'Fluent' },
    { lang: 'French', level: 'Intermediate' },
  ],
};

function CVSection({ title, children }) {
  return (
    <div className="mb-20 pb-20 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <h2 className="text-xs font-light tracking-[0.25em] text-gray-400 uppercase mb-12">{title}</h2>
      {children}
    </div>
  );
}

function CVRow({ left, right, sub, note }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-16 mb-10 last:mb-0">
      <span className="text-xs font-light tracking-widest text-gray-400 md:w-32 shrink-0 mt-1">{left}</span>
      <div className="flex-1">
        <p className="text-lg font-light text-gray-900 leading-snug">{right}</p>
        {sub && <p className="text-sm font-light text-gray-500 mt-1">{sub}</p>}
        {note && <p className="text-xs font-light text-gray-400 tracking-widest mt-1 uppercase">{note}</p>}
      </div>
    </div>
  );
}

export default function CV() {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Spacer for global nav */}
      <div className="h-[72px]" />

      {/* CV Content */}
      <div className="max-w-4xl mx-auto px-8 py-24 md:py-32">

        {/* Actions row */}
        <div className="flex justify-end items-center mb-16">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 text-xs font-light tracking-widest text-gray-400 hover:text-gray-900 transition-colors uppercase"
          >
            <Download size={13} />
            Download
          </button>
        </div>

        {/* Header */}
        <div className="mb-32 flex items-start justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-7xl font-light tracking-tight leading-none mb-6 animate-fade-in-up">
              Dor Regev
            </h1>
            <p className="text-lg font-light text-gray-500 tracking-wide animate-fade-in-up animation-delay-100">
              Multidisciplinary Artist — Theatre · Contemporary Circus · Performance
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-12 text-xs font-light text-gray-400 tracking-widest animate-fade-in-up animation-delay-200">
              <span>hello@dorregev.com</span>
              <span>+972 (0) 54 123 4567</span>
              <span>Tel Aviv, Israel</span>
            </div>
          </div>

          {/* Portrait */}
          <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-sm overflow-hidden animate-fade-in animation-delay-200">
            {/* Replace the src below with your actual photo URL */}
            <img
              src="https://placehold.co/128x128/e5e5e5/999999?text=Photo"
              alt="Dor Regev"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Education */}
        <CVSection title="Education">
          {cvData.education.map((e, i) => (
            <CVRow key={i} left={e.years} right={e.institution} sub={e.degree} note={e.location} />
          ))}
        </CVSection>

        {/* Performances & Productions */}
        <CVSection title="Performances & Productions">
          {cvData.performances.map((p, i) => (
            <CVRow key={i} left={p.year} right={p.title} sub={p.venue} note={p.role} />
          ))}
        </CVSection>

        {/* Awards & Recognition */}
        <CVSection title="Awards & Recognition">
          {cvData.awards.map((a, i) => (
            <CVRow key={i} left={a.year} right={a.title} sub={a.body} />
          ))}
        </CVSection>

        {/* Exhibitions & Festivals */}
        <CVSection title="Exhibitions & Festivals">
          {cvData.exhibitions.map((e, i) => (
            <CVRow key={i} left={e.year} right={e.title} sub={e.venue} />
          ))}
        </CVSection>

        {/* Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-20">
          <CVSection title="Disciplines & Skills">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {cvData.skills.map((s, i) => (
                <span key={i} className="text-sm font-light text-gray-700">{s}</span>
              ))}
            </div>
          </CVSection>

          <CVSection title="Languages">
            {cvData.languages.map((l, i) => (
              <div key={i} className="flex justify-between items-center mb-4 last:mb-0">
                <span className="text-sm font-light text-gray-900">{l.lang}</span>
                <span className="text-xs font-light text-gray-400 tracking-widest uppercase">{l.level}</span>
              </div>
            ))}
          </CVSection>
        </div>

      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          header, .sticky { display: none !important; }
          body { background: white; }
          .animate-fade-in-up { animation: none; opacity: 1; }
        }
      `}</style>
    </div>
  );
}