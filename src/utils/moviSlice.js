import { createSlice } from "@reduxjs/toolkit";

const moviSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVide:null
    },
    reducers:{
        addNowPlayingMovies:(state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state , action) => {
            state.trailerVide = action.payload
        }
    }
})
export const {addNowPlayingMovies , addTrailerVideo} = moviSlice.actions;
export default moviSlice.reducer