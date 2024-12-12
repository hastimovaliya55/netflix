import React , { useEffect } from 'react'
import useNowPlayingMovies from '../Hooks/useNowplayingmovie';
import Header from './header'
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import Serchmovie from './Serchmovie';
const Brose = () => {
  const navigate = useNavigate();
  //custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const toggle = useSelector(store => store.movie.toggle);
  const user = useSelector(store => store.app.user);
  useEffect(() => {
    if (!user) {
        navigate("/");
    }
}, []);
  return (
    
    <div>
    <Header />
    <div>
    {
                    toggle ? <Serchmovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>

                    )
                }
    </div>
    </div>
  )
}

export default Brose