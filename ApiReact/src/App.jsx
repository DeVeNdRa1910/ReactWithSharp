import './App.css'
import { useState } from 'react'
import MoviesList from './Components/MoviesList'

function App() {
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    try {
      const resp = await fetch('https://swapi.dev/api/films/');
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
      setIsLoading(false)
    } catch (err) {
      console.error(err);
    }
  }

  console.log(movies);

  return (
    <>
      <div className='flex justify-around text-center w-4/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <section className='w-full'>
          <button onClick={fetchMoviesHandler} className='rounded-xl bg-blue-600 text-white px-12 py-2 m-4'>Fetch Movies</button>
        </section>
      </div>
      <div className='flex justify-around text-center text-black w-4/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <section>
          {!isLoading && <MoviesList movies={movies}/>}
          {isLoading && <h1 className='text-blue-500 text-5xl py-10 font-extrabold'>Loading...</h1>}
        </section>
      </div>
    </>
  )
}

export default App
