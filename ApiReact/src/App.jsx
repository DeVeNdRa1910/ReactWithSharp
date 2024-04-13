import './App.css'
import { useCallback, useEffect, useState } from 'react'
import MoviesList from './Components/MoviesList'
import AddMovie from './Components/AddMovie';
import { nanoid } from 'nanoid';

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
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch('https://reacthttp-97eeb-default-rtdb.firebaseio.com/movies.json');
      
      if(!resp.ok){
        throw new Error('Something went wrong!')
      }
      const data = await resp.json();

      const loadedMovies= [];

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          director: data[key].director,
          releaseDate: data[key].release_date,
          openingCrawl: data[key].opening_crawl,
        })
      }

      /* 
      No need it
      const transformedMovies = loadedMovies.map(item => {
        return {
          key: item.key,
          title: item.title,
          director: item.director,
          release_date: item.releaseDate,
          opening_crawl:item.openingCrawl
        }
      }) */

      setMovies(loadedMovies);

    } catch (err) {
      setError(err.message);
      console.error(err);
    }
    setIsLoading(false)

    // Another Method
/*     let content;
    if(!isLoading && movies.length > 0 ){
      content = <MoviesList movies={movies}/>
    }

    if(!isLoading && movies.length === 0 && !error ){
      content = <h1 className='text-blue-500 text-5xl py-10 font-extrabold'>Error 404 : Movies Not found</h1>;
    }

    if(!isLoading && error ) {
      content = <h1 className='text-blue-500 text-5xl py-10 font-extrabold'> {error} </h1>;
    }

    if(isLoading){
      content = <h1 className='text-blue-500 text-5xl py-10 font-extrabold'>Loading...</h1>
    } */
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  } , [fetchMoviesHandler]);

  async function addmovieHandler(movie) {
    console.log(movie);

    try {
      const resp = await fetch('https://reacthttp-97eeb-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          //technically not required
          'Content-Type' : 'appplication/json'
        }
      })

      if(!resp.ok){
        throw new Error("Something went wrong, Your POST request is failed") 
      }
  
      const data = await resp.json();
      
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  //console.log(movies);

  return (
    <>

      <div className='flex justify-around text-center w-3/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <AddMovie onAddMovie={addmovieHandler}/>
      </div>
      <div className='flex justify-around text-center w-3/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <section className='w-full'>
          <button onClick={fetchMoviesHandler} className='rounded-xl bg-blue-600 text-white px-12 py-2 m-4'>Fetch Movies</button>
        </section>
      </div>
      <div className='flex justify-around text-center text-black w-3/5 mx-auto my-4 bg-yellow-100 rounded-3xl'>
        <section className='w-4/5'>
          {!isLoading && movies.length > 0 && <MoviesList movies={movies} changeMovies={setMovies}/>}
          {!isLoading && movies.length === 0 && !error && <h1 className='text-blue-500 text-5xl py-10 font-extrabold'>Movies Not found</h1>}
          {!isLoading && error && <h1 className='text-blue-500 text-4xl py-10 font-extrabold'> {error} </h1>}
          {isLoading && <h1 className='text-blue-500 text-4xl py-10 font-extrabold'>Loading...</h1>}
        </section>
      </div>
    </>
  )
}

export default App
