import './App.css'
import { useState } from 'react'
import MoviesList from './Components/MoviesList'

function App() {
  
  const [movies, setMovies] = useState([])

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

  async function fetchMoviesHandler() {
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
    } catch (err) {
      console.error(err);
    }
    const resp = await fetch('https://swapi.dev/api/films/');
    const data = await resp.json();
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
          <MoviesList movies={movies}/>
        </section>
      </div>
    </>
  )
}

export default App
