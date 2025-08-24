import Headers from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"; 

import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/useNowPopularMovies";
import useNowTrending from "../hooks/useNowTrending";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browser = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useNowTrending();
  

  return (
    <div>
      <Headers></Headers>
      {showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
         <MainContainer/>
         <SecondaryContainer/>
        </>
      )}
    </div>
  )
}

export default Browser
