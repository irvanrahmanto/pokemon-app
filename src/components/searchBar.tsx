import { useState } from "react";
import "../App.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
        <input
            className="search-box"
            type="text"
            placeholder="Search...."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
        />
    </div>
  );
};

export default SearchBar;