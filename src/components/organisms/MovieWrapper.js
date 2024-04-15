import { Icon } from '@iconify/react/dist/iconify.js'
import MovieMainPart from '../molecules/movieMainPart/MovieMainPart'
import MovieDetailPart from '../molecules/movieDetailPart/MovieDetailPart'

const MovieWrapper = ({ movie }) => {
  return (
    <section>
      <div className='row position-relative'>
        <MovieMainPart movie={movie} />
        <div className='w-100 text-center align-items-center' style={{ background: 'red', height: 20 }} >
          <Icon style={{ position: 'relative', top: '-1rem' }} icon='mdi:arrow-down-drop' fontSize={52} />
        </div>
        <MovieDetailPart movie={movie} />
      </div>
    </section>
  )
}

export default MovieWrapper
