import MoviesList from '@/app/components/movies/MoviesList'
import { DetailedMovie } from '@/app/lib/definitions'
import Link from 'next/link'

export default async function WatchlistPage({searchParams} : {
    searchParams: Promise<{ id: Partial<DetailedMovie>[] | undefined }>;
}) {
    const { id } = await searchParams
  return id ? (
    <main className='main-content'>
        <h1>My Watchlist!</h1>
        <MoviesList imdbList={id}/> 
    </main>
  )
  : (
    <main className='main-content'>
      <h1>My Watchlist!</h1>
      <h3>Your watchlist is looking a little empty...</h3>
      <Link
        href='/search'
      >
        Lets add some movies!
      </Link>
    </main>
  )}
