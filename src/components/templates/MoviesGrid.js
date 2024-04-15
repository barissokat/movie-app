import { useSelector } from 'react-redux'
import NavigationButton from '../atoms/NavigationButton/NavigationButton'
import MovieWrapper from '../organisms/MovieWrapper'
import { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'

const MoviesGrid = () => {
  const pageNumber = useSelector((state) => state.page.value)
  const [movies, totalResults] = useContext(MoviesContext)

  return (
    <div className='container-fluid mt-4'>
      <div className='row gap-0 row-gap-3'>
        <div className='col-2'>
          <NavigationButton direction='prev' disabled={pageNumber - 1 === 0} />
        </div>
        {movies.map((movie, index) => (
          <div key={index} className='p-2 col-md-2'>
            <MovieWrapper movie={movie} />
          </div>
        ))}
        <div className='col-2'>
          <NavigationButton direction='next' disabled={Math.ceil(totalResults / 10) === pageNumber} />
        </div>
      </div>
    </div>
  )
}

export default MoviesGrid
