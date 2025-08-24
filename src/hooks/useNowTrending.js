import { API_OPTIONS } from '../utils/constant'
import { addTrendingMovies } from '../utils/moviSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const useNowTrending = () =>{
  const dispatch = useDispatch();
  const getTrendingMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated' , API_OPTIONS);
      const json = await data.json();
      
      dispatch(addTrendingMovies(json.results))
  };

  useEffect(() => {
    getTrendingMovies();
  },[])
}

export default useNowTrending;
