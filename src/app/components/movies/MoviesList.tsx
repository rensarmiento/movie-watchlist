import { fetchMovieList } from '@/app/lib/data'
import  { MovieElement } from './MovieElement';
import { DetailedMovie } from '@/app/lib/definitions';

export default async function MoviesList({
    title,
}: {
    title : string
}) {

    const movieList: Array<DetailedMovie> | undefined = await fetchMovieList(title);
    const movieElements = Array.isArray(movieList) ? movieList.map((movie:DetailedMovie) => {
        return (
            <div
                key={movie.imdbID}
                className="movie-container"
            >
                <MovieElement movie={movie} />
            </div>
        )
    }) : null

    return (
        <div className='movie-list-container'>
            {movieList ? movieElements : <h1>Unable to find what you&apos;re looking for. Please try another search.</h1>}
        </div>
    )
}

