import React from 'react';

function Movie(props) {
  async function deleteHandler(id) {
    try {
      // Perform deletion logic
      await fetch(`https://reacthttp-97eeb-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method: 'DELETE',
      });

      // Update state to reflect deletion
      props.movies = props.movies.filter((movie) => movie.id !== id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <li className='border-b-2 border-black m-4 pb-4 bg-stone-800 rounded-xl p-4'>
        <h2 className='text-4xl text-yellow-500 font-bold'>{props.title}</h2>
        <h3 className='text-white text-2xl'>Director: {props.director}</h3>
        <h3 className='text-lg text-red-100 font-semibold'>Release-Date: {props.releaseDate}</h3>
        <p className='text-blue-200 text-justify  text-lg'>{props.openingCrawl}</p>
        <button className='bg-red-600 text-white px-10 text-lg mt-2 py-1 border border-white rounded-xl hover:bg-red-700 hover:px-11 hover:text-orange-200' onClick={(e) => deleteHandler(props.id)}>DELETE</button>
      </li>
    </div>
  );
}

export default Movie;
