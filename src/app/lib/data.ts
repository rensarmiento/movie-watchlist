export const key: string = '68f52006';
import { DetailedMovie, imdbList } from "./definitions";

// string example = `http://www.omdbapi.com/?apikey=68f52006&t=ender's+game`

export const fetchMovieList = async (title: string ) => { 
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title ? title : 'star+wars'}`)
    // console.log(title)
    if(!res.ok) {
      throw {
        message: `Failed to get movie: ${title}`,
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()

    const movieData = data?.Search
    // console.log(movieData)
    return await fetchDetailedMovieData(movieData)
  }

  export const fetchDetailedMovieData = async (movieData: Partial<DetailedMovie>[] | imdbList) => {
    try {
      const requests = movieData.map(movie => (
        fetch(`http://www.omdbapi.com/?apikey=${key}&i=${(typeof movie === 'string') ? movie : movie?.imdbID}&type=movie&plot=full`)
        .then(res => res.json())
      ))
      const results = await Promise.all(requests)
      console.log(results)
      return results.filter(movie => movie.Response !== 'False')
    } catch (err) {
      console.error('Error fetching detailed movie data:', err)
    }
  }

  export const getWatchlistMovieData = async (imdbList: imdbList) => {
    try {
      const requests = imdbList.map(id => 
        fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}&type=movie&plot=full`)
        .then(res => res.json())
      )
      const results = await Promise.all(requests)
      // console.log(results)
      return results.filter(movie => movie.Response !== 'False')
    } catch (err) {
      console.error('Error fetching detailed movie data:', err)
    }
  }