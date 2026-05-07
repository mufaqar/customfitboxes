"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(
      `https://customfitboxes.com/search?name=${encodeURIComponent(search)}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-black/20 bg-white flex items-center gap-x-3 pr-3 pl-4 h-10 shadow-[0_0_20px_-3px_rgb(211,211,211)]"
    >
      <input
        type="text"
        id="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by product, categories..."
        className="w-full outline-none tracking-wider text-xs sm:text-sm h-full text-black"
      />

      <button
        type="submit"
        className="text-title/50 hover:text-primary transition"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;