import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bg_img } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div>
        <img
          
          src={bg_img}
          alt="background"
          className="w-screen h-screen object-cover fixed top-0 left-0 -z-10"
        />
      </div>
    <div className='pt-[30%] md:p-0'>
       
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
     </>
  )
}

export default GptSearch
