'use client'
import { useState } from 'react'
import Image from 'next/image'
import { DetailedMovie } from '@/app/lib/definitions'
import { FaStar } from "react-icons/fa";
import { useWatchlistContext } from '@/app/providers';


export const MovieElement = ( {movie} : DetailedMovie ) => {
    const { list, setWatchList } = useWatchlistContext();
     const [isExpanded, setIsExpanded ] = useState(false)
     const toggleReadMore = () => {
        setIsExpanded(!isExpanded)
     };
     const { 
        Genre,
        imdbID,
        imdbRating, 
        Plot,
        Poster,
        Runtime,
        Title
     } = movie
    const imageUrl = movie?.Poster === "N/A" ? '/Icon.png' : Poster
    const imageStyle = {
        borderRadius: '5px',
        border: '1px solid #fff',
        display: 'block',
    }
    const handleWatchlistButton = (movieId) => {
        if (list.find(id => (id === movieId))) {
            return setWatchList(prevWatchlist => (
                prevWatchlist.filter(id => id !== movieId)
            ))
        } else {
            return setWatchList(prevWatchlist => {
                return [...prevWatchlist, movieId]
            })
        }   
    }
    

    const showReadMore = (Plot: string) => {
        if (Plot.length > 300) {
            return (
                <>
                    {isExpanded ? <p className='plot'>{Plot}</p> : <p>{`${Plot.slice(0, 300)}...` }</p>}
                    <button className='read-more' onClick={toggleReadMore}>{isExpanded ? `Read less` : 'Read more'}</button>
                </>
        )
        } else if (Plot.length <= 300) {
            // setIsExpanded(!isExpanded)
            return (
                <p className='plot'>{Plot}</p>
            )
        }
    }

    return movie ? (
        <>
            <Image
                src={imageUrl}
                width={200}
                height={300}
                style={imageStyle}
                alt={`${Title} poster`}
            />
            <div className="movie-detail-data">
                <div className='title-line'>
                    <h1>{Title}</h1> 
                    <FaStar className='star-icon'/>
                    <p>{imdbRating}</p>
                </div>
                <div>
                    <p className='detail-line'><span>{Runtime}</span>{Genre}</p>   
                    
                        <button 
                            className='addBtn'
                            onClick={() => handleWatchlistButton(movie.imdbID)}
                        >{list.find(id => id===movie.imdbID) ? 'Remove from watchlist' : 'Add to watchlist' }</button>
                </div>
                <div className='plot-container'>
                    {showReadMore(Plot)}
                </div>
            </div>
            {/* { index < movieList.length-1 ? <hr/> : null } */}
        </>
    ) : null
}
