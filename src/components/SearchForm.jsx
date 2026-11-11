import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchForm = ({ submit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="movie__header">
          <h2 className="movie__header--title">Browse for Movies & TV Shows</h2>
          <form onSubmit={submit}>
            <input
              id="searchInput"
              placeholder="Search by Title or Keyword"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn">
              <FontAwesomeIcon icon="magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
