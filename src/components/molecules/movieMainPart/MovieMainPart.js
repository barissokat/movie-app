import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const MovieMainPart = ({ movie }) => {
  return (
    <div className='d-flex flex-column' style={{ height: 400, background: `url('${movie.Poster}')`, backdropFilter: 'blur(10px)' }}>
      <Link to='/' className='d-flex position-absolute text-light' style={{ right: '1.5rem', filter: 'drop-shadow(3px 4px 5px rgba(0, 0, 0, 0.5))' }}>
        <span className='ms-auto'>
          <Icon icon='material-symbols:close' fontSize={60} />
        </span>
      </Link>
      <div className='d-flex flex-column justify-content-end w-100 h-100' style={{ backgroundColor: 'rgba(0,0,0,.7)' }}>
        <div className='w-50'>
          <div className='py-3 px-5'>
            <h1>{movie.Title}</h1>
            <p>
              {movie.Plot}
            </p>
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row align-items-center'>
                <Icon icon={movie.Type === 'movie' ? 'ic:baseline-local-movies' : 'fluent:movies-and-tv-16-filled'} fontSize={32} color='red' />
                IMDb {movie.imdbRating}
                <Icon icon='mdi:dot' />
                {movie.Year}
                <Icon icon='mdi:dot' />
                {movie.Runtime}
              </div>
              <h5 className='mt-2'>
                {movie.Genre}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieMainPart
