// Importing React
import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>
          <a
            style={{ color: "#f9d3b4", textDecoration: "none" }}
            href={`https://www.imdb.com/title/${imdbID}/`}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            {Title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
