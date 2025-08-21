import Headers from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"; 

import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
const Browser = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Headers></Headers>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
