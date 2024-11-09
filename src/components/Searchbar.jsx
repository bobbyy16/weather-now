import { Search } from "lucide-react";

export const SearchBar = ({ inputRef, handleSearch, handleKeyPress }) => (
  <div className="flex gap-2">
    <input
      ref={inputRef}
      className="flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
      placeholder="Enter city name..."
      onKeyPress={handleKeyPress}
    />
    <button
      onClick={handleSearch}
      className="h-12 px-4 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      <Search className="w-5 h-5" />
    </button>
  </div>
);
