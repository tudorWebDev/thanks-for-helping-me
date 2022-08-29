import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import requests from "../requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  //console.log(movie);

  const shortenString=(str, num)=> {
    if(str?.length>num){
      return str.slice(0, num)+"..."
    }
    else{
      return str
    }
  }

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="rounded bg-green-600 font-medium text-black  py-2 px-6 hover:bg-green-800 hover:text-black/70 hover:scale-[1.18] duration-500">
              Play
            </button>
            <button className="border rounded text-white border-green-600 py-2 px-5 ml-4 hover:bg-green-600 hover:text-black hover:scale-[1.10] duration-500">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">{shortenString(movie?.overview,180)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
