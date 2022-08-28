import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useState } from 'react'


const Movie = ({item}) => {
    const [like,setLike]=useState(false)
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3  ">
    <img
      className="w-full h-auto block rounded-sm"
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/60 text-white  opacity-0  hover:opacity-[0.75] hover:duration-500  ">
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center mx-5 ">
        {item?.title}
      </p>
      <p>
        {like?<FaHeart  className="absolute top-6 left-6 text-grey-300"/> : <FaRegHeart className="absolute top-6 left-6 text-grey-300"/>}
      </p>
    </div>
  </div>
  )
}

export default Movie