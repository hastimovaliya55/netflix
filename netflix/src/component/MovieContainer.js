import React from 'react'
import Movielist from './Movielist'
import {useSelector} from "react-redux";

function MovieContainer() {
  const movie = useSelector(store=>store.movie);
  return (
    <div className='bg-black'>
      <div className='-mt-60 relative z-10'>
      <Movielist title={"Popular Movies"} movies={movie.popularMovie}/>
        <Movielist title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <Movielist title={"Top Tated Movies"} movies={movie.topRatedMovies}/>
        <Movielist title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
     
    </div>
  )
}

export default MovieContainer