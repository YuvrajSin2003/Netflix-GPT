import React from "react";
import MoviCard from "./MoviCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-6 py-4">
      <h1 className="text-xl md:text-3xl py-4 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 md:space-x-4">
          {movies?.map((movie) => (
            <MoviCard key={movie.id} PosterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
