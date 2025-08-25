import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { moviResult, moviName } = useSelector((store) => store.gpt);

  const gpt = useSelector((store) => store.gpt);
  if (!moviName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {moviName.map((moviName, index) => (
          <MovieList
            key={moviName}
            title={moviName}
            movies={moviResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
