import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MoviCard = ({PosterPath}) => {
  if(!PosterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-2 md:pr-4 flex-shrink-0'>
      <img
        alt='Movie card'
        src={IMG_CDN_URL+PosterPath}
        className='w-full rounded-lg object-cover'
      />
    </div>
  )
}

export default MoviCard
