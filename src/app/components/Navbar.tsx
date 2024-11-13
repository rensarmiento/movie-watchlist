'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname();
  let headerTitles = null;
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
          href='/watchlist'
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