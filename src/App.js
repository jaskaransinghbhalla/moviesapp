import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
const App = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    try {
      const url = `${API_URL}&s=${title}`;
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      const data = await response.json();
      const parsedData = JSON.parse(data.contents);
      setMovies(parsedData.Search);
    } catch (e) {
      console.log(e);
      // alert(e);
    }
  };
  // eslint-disable-next-line
  useEffect(() => {
    searchMovies("Netflix");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
