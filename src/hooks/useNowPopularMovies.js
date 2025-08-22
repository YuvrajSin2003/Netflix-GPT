import { API_OPTIONS } from '../utils/constant'
import { addPopularMovies } from '../utils/moviSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const usePopularMovies = () =>{
  const dispatch = useDispatch();
  const getNowPlayingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular' , API_OPTIONS);
      const json = await data.json();
      
      dispatch(addPopularMovies(json.results))
  };

  useEffect(() => {
    getNowPlayingMovies();
  },[])
}

export default usePopularMovies;