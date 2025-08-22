import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MoviCard = ({PosterPath}) => {
  return (
    <div className='w-52 pr-4'>
      <img alt='Movie card'
      src={IMG_CDN_URL+PosterPath}
      />
    </div>
  )
}

export default MoviCard
