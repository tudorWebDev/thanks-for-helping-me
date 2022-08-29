import React from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useState } from 'react'
import {UserAuth} from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'


const Movie = ({item}) => {
    const [like,setLike]=useState(false)
    const [saved,setSaved]=useState(false)
    const {user}= UserAuth()

  const movieID=doc(db, 'users', `${user?.email}`)

  const saveShow= async ()=>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID,{
        savedShows: arrayUnion({
          id:item.id,
          title:item.title,
          img: item.backdrop_path,
        })
      })
      }
      else{
        alert('Please log in to save a movie')
      }

    }
  

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3  hover:scale-[1.05] duration-500 ">
    <img
      className="w-full h-auto block rounded-sm"
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <div className="absolute top-0 left-0 w-full h-full  hover:bg-black/60 text-white  opacity-0  hover:opacity-[0.75] hover:duration-500  ">
      <p className="white-space-normal text-[8px] md:text-sm font-bold flex justify-center items-center h-full text-center mx-5 ">
        {item?.title}
      </p>
      <p className='text-sm md:text-base' onClick ={saveShow}>
        {like ? <FaHeart  className="  absolute md:top-5 md:left-5 top-4 left-4 text-red-600 duration-500" /> : <FaRegHeart className="absolute md:top-5 md:left-5 top-4 left-4 text-grey-400 hover:text-red-400 duration-500"/>}
      </p>
    </div>
  </div>
  )
}

export default Movie