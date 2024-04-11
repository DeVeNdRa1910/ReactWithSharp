import React from 'react'
import Movie from './Movie'

function MoviesList(props) {
  return (
    <div>
      <ul className='list-none'>
        {
            props.movies.map(item => {
                return (
                    <div key={item.id}>
                        <Movie  id={item.id} title={item.title} director={item.director} releaseDate={item.release_date} openingCrawl={item.opening_crawl}/>
                    </div>
                )
            })
        }
      </ul>
    </div>
  )
}

export default MoviesList
