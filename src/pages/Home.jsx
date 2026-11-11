import MovieCard from "../components/MovieCard";
import SearchForm from "../components/SearchForm";

const Home = ({
  loading,
  movies,
  searchTerm,
  sortOrder,
  onSearchSubmit,
  onSortChange,
}) => {
  return (
    <div className="container">
      <div className="row">
        <SearchForm submit={onSearchSubmit} />
        <div className="results__header">
          {loading ? (
            <>
              <div className="results__title--skeleton"></div>
              <div className="select--skeleton"></div>
            </>
          ) : (
            <>
              {movies.length > 0 ? (
                <h1 className="results__title">Showing: "{searchTerm}"</h1>
              ) : (
                <h1 className="results__title">No Movies Found</h1>
              )}
              <select
                id="filter"
                value={sortOrder}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="DEFAULT">Default</option>
                <option value="A_TO_Z">A to Z</option>
                <option value="Z_TO_A">Z to A</option>
                <option value="OLD_TO_NEW">Oldest to Newest</option>
                <option value="NEW_TO_OLD">Newest to Oldest</option>
              </select>
            </>
          )}
        </div>
        <div className="searchResults">
          {loading
            ? new Array(10).fill(0).map((_, index) => (
                <div className="movie" key={index}>
                  <div className="movie__img--wrapper">
                    <div className="movie__img--skeleton"></div>
                  </div>
                  <div className="movie__title">
                    <div className="movie__title--skeleton"></div>
                  </div>
                  <div className="movie__year--skeleton"></div>
                </div>
              ))
            : movies
                .map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
                ?.slice(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default Home;
