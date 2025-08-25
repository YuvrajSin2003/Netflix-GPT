import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        moviResult:null,
        moviName:null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult:(state , action) =>{
            const {moviName , moviResult} = action.payload
            state.moviName = moviName;
            state.moviResult =moviResult;
        }
    },
});

export const { toggleGptSearchView , addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
