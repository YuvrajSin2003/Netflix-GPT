import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movi in tmdb api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' + 
      movie +
      '&include_adult=false&language=en-US&page=1', API_OPTIONS
    );
    const json = await data.json()
    return json.results;
  }

  //Ai api call
const handleGptSearchClick = async () => {
  const searchQuery = searchText.current.value;

  const getQuery = `Act as a Movie Recommendation system and suggest 5 movies for: ${searchQuery}.
  Only return names, comma separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

    // Generate Gemini content
    const result = await model.generateContent(getQuery);
    const text = await result.response.text(); 

    // Convert string → array
    const movies = text.split(",").map(m => m.trim());

    // Fetch movie details from TMDB
    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
    const TMDBResults = await Promise.all(promiseArray);

    console.log(TMDBResults);

    dispatch(addGptMovieResult({ moviName: movies, moviResult: TMDBResults }));
  } catch (error) {
    console.error("Error fetching Gemini results:", error);
    return [];
  }
};



  return (
    <div className="pt-[15%] flex justify-center ">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 col-span-3 m-4 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
