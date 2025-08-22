import Headers from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"; 

import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/useNowPopularMovies";
const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Headers></Headers>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
