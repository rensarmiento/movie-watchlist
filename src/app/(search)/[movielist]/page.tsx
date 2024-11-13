import MoviesList from '@/app/components/movies/MoviesList'
//  this is where the movie list will go

export default async function Page(props : {
  searchParams?: Promise<{
    title?:string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const title = searchParams?.title ? decodeURIComponent(searchParams.title) : '';
  return (
    <main className='main-content'>
      <MoviesList title={title}/>
    </main>
  )
}
