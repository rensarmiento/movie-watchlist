'use client'
import MoviesList from "../components/movies/MoviesList";
import { useWatchlistContext } from "../providers"
import { MovieElement } from '../components/movies/MovieElement' 
import { useEffect } from 'react'
import { getWatchlistMovieData } from "../lib/data";
import { DetailedMovie } from "../lib/definitions";




const page = () => {
  useEffect(()=> {
    const fetchMovieList = async() => {
      try {
        const movies = await getWatchlistMovieData(list)
      } catch (err) {
        return
      }
    }
    fetchMovieList()
  }, [])

  const { list, setWatchList } = useWatchlistContext(); 

  // const watchlistElements = Array.isArray(watchlist) ? watchlist?.map(movie => {
  //   <div
  //     key={movie.imdbID}
  //     className="movie-container"
  //   >
  //     <MovieElement movie={movie}/>
  //   </div>
  // }) : null;

  return (
        <main>
            <h1>My Watchlist</h1>
            {/* {list ? watchlistElements : <h1>Your watchlist is empty.</h1>} */}
        </main>
  )
}

export default page