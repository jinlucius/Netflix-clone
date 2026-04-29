import React, { useState, useEffect } from "react";
import "./Rows.css";
import { fetchData } from "../../data/deta";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData(fetchUrl)
      .then((response) => {
        const moviesWithImages = response.data.results.map((movie) => ({
          ...movie,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));
        setMovies(moviesWithImages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={movie.image}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;