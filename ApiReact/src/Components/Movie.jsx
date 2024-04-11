import React from 'react'

function Movie(props) {
  return (
    <li key={props.id} className='border-b-2 border-black m-4 pb-4 bg-stone-800 rounded-xl p-4'>
      <h2 className='text-4xl text-yellow-500 font-bold'>{props.title}</h2>
      <h3 className='text-white text-2xl'>Director: {props.director}</h3>
      <h3 className='text-lg text-red-100 font-semibold'>Release-Date: {props.releaseDate}</h3>
      <p className='text-blue-200 text-justify  text-lg'>{props.openingCrawl}</p>
    </li>
  )
}

export default Movie
