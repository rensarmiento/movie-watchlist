import SearchBar from '@/app/components/search/SearchBar'
export default function SearchLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <div className='searchbar-container'>
            <SearchBar/>
          </div>
          {children}
        </>
    );
  }