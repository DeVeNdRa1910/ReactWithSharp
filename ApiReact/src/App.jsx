import './App.css'
import { useState } from 'react'
import MoviesList from './Components/MoviesList'

function App() {
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /* then catch syntax */
  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       const transformedMovies = data.results.map(item => {
  //         return {
  //           id: item.episode_id,
  //           title: item.title,
  //           director: item.director,
  //           release_date: item.release_date,
  //           opening_crawl:item.opening_crawl
  //         }
  //       })
  //       setMovies(transformedMovies)
  //     })
  //     .catch(err => console.error(err))
  // }




  /* async await syntax */
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch('https://swapi.dev/api/film/');
      
      if(!resp.ok){
        throw new Error('Something went wrong!')
      }
      
      const data = await resp.json();
      
      const transformedMovies = data.results.map(item => {
        return {
          id: item.episode_id,
          title: item.title,
          director: item.director,
          release_date: item.release_date,
          opening_crawl:item.opening_crawl
        }
      })
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
    setIsLoading(false)
  }

  //console.log(movies);

  return (
    <>
      <div className='flex justify-around text-center w-4/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <section className='w-full'>
          <button onClick={fetchMoviesHandler} className='rounded-xl bg-blue-600 text-white px-12 py-2 m-4'>Fetch Movies</button>
        </section>
      </div>
      <div className='flex justify-around text-center text-black w-4/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <section>
          {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
          {!isLoading && movies.length === 0 && <h1 className='text-blue-500 text-5xl py-10 font-extrabold'>Error 404 : Movies Not found</h1>}
          {!isLoading && error && <h1 className='text-blue-500 text-5xl py-10 font-extrabold'> {error} </h1>}
          {isLoading && <h1 className='text-blue-500 text-5xl py-10 font-extrabold'>Loading...</h1>}

        </section>
      </div>
    </>
  )
}

export default App
