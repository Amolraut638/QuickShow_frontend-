import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Movies = () => {
  return dummyShowsData.length > 0 ?  (  //only show this cards when there is minimum 1 movie available
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      <BlurCircle left='0px' top='150px'/> 
      <BlurCircle bottom='50px' right='50px'/> 
      <h1 className='text-lg font-medium my-4'>Now showing</h1>
      {/* list of movies */}
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie)=>( //we get individual movie from this parameter
          <MovieCard movie={movie} key={movie._id}/>  
        ))}
      </div>
    </div>
  ) : (
    //if movie is not available
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-semibold text-center'>No movies available</h1>
    </div>
  )
}

export default Movies