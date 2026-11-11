import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("avengers");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [sameSearch, setSameSearch] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=abb25aee&s=${searchTerm}`,
        );
        const searchResults = response.data.Search ?? [];
        setOriginalMovies(searchResults);
        setMovies(searchResults);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }

    setTimeout(() => {
      fetchMovies();
    }, 1000)
  }, [searchTerm, sameSearch]);

  function handleSearchSubmit(event) {
    setLoading(true);
    setSameSearch((search) => search + 1);
    event.preventDefault();
    setSortOrder("DEFAULT");
    setMovies([...originalMovies]);
    setSearchTerm(event.target.searchInput.value);
  }

  function handleSortChange(order) {
    setSortOrder(order);

    if (order === "DEFAULT") {
      setMovies([...originalMovies]);
    }

    setMovies(
      [...originalMovies].sort((a, b) => {
        if (order === "A_TO_Z") {
          return a.Title.localeCompare(b.Title);
        } else if (order === "Z_TO_A") {
          return b.Title.localeCompare(a.Title);
        } else if (order === "OLD_TO_NEW") {
          return parseInt(a.Year) - parseInt(b.Year);
        } else if (order === "NEW_TO_OLD") {
          return parseInt(b.Year) - parseInt(a.Year);
        }
      }),
    );
  }

  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loading={loading}
                movies={movies}
                searchTerm={searchTerm}
                sortOrder={sortOrder}
                onSearchSubmit={handleSearchSubmit}
                onSortChange={handleSortChange}
              />
            }
          />
          <Route path=":id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
