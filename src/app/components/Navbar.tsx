'use client'

import Link from 'next/link'
import { useWatchlistContext } from '../providers';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


function Navbar() {
  const { list } = useWatchlistContext();
  // const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  let headerTitles = null;
  const params = new URLSearchParams(list?.map(movieId => ['id', movieId]) || '')


  if(pathname === '/watchlist') {
    headerTitles = (
      <>
        <h1>My Watchlist</h1>
        <Link
            href='/search'
            >Search for films &#8594;
        </Link>
      </>
    )
  } else if (pathname === '/search') {
    headerTitles = (
      <>
        <h1>Find your film</h1>
        <Link
          href={`/watchlist?${params}`}
          >My Watchlist &#8594;
        </Link>
      </>
    )
  } else {
    headerTitles = (
      <>
        <h1>Find your film</h1>
        <Link
          href='/search'
          >Search for films &#8594;
        </Link>
      </>
    )
  }


  return (
    <nav className="navbar">
      {headerTitles}
    </nav>
  )
}

export default Navbar