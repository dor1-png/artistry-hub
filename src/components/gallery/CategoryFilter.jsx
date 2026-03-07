import React from 'react';

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}