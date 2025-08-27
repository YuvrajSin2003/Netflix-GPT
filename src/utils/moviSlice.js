import { createSlice } from "@reduxjs/toolkit";

const moviSlice = createSlice({
    name:"movies",
    initialState:{
      nowPlayingMovies:null,
      trailerVide:null,
      popularMovies:null,
      trendingMovies:null,
      upcomingMovies:null


    },
    reducers:{
        addNowPlayingMovies:(state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state , action) => {
            state.popularMovies = action.payload;
        },
         addTrendingMovies:(state , action) => {
             state.trendingMovies = action.payload;
         },
         addUpcomingMovies:(state , action) => {
             state.upcomingMovies = action.payload;
         },
         addTrailerVideo:(state , action) => {
             state.trailerVide = action.payload
         }
    }
})
export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTrendingMovies, addUpcomingMovies} = moviSlice.actions;
export default moviSlice.reducer