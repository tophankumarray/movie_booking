import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie._id} className="border p-4 rounded-lg">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
