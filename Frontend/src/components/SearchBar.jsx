import React, { useState } from "react";
import "../styles/Layout.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Type something..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="searchIcons">
        <img src="/icons/search.png" alt="search" />
        <img src="/icons/microphone-black-shape.png" alt="mic" />
      </div>
    </div>
  );
}