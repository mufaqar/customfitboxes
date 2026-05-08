"use client";

import { useState } from "react";

type CategoryTabsProps = {
  categories: string[];
  onCategoryChange?: (category: string) => void;
};

export default function CategoryTabs({ categories, onCategoryChange }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryChange(cat)}
          className={`rounded-lg py-2 px-4 text-sm sm:text-base transition-all ease-in-out
            ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-zinc-200 text-black hover:bg-primary hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}