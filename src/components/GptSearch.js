import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bg_img } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div>
        <img
          src={bg_img}
          alt="background"
          className="w-screen h-screen object-cover fixed top-0 left-0 -z-10"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
