import { Icon } from "@iconify/react/dist/iconify.js"

const MovieDetailPart = ({ movie }) => {
  return (
    <div className='row mt-4 px-5'>
      <div className='col-md-5'>
        <Icon icon='material-symbols:recent-actors' fontSize={32} color='red' /> {movie.Actors}
        <br />
        <Icon icon='tabler:chair-director' fontSize={32} color='red' /> {movie.Director}
      </div>
      <div className='col-md-4'>
        <Icon icon='gis:search-country' fontSize={32} color='red' /> {movie.Country}
        <br />
        <Icon icon='material-symbols:language' fontSize={32} color='red' /> {movie.Language}
      </div>
      <div className='col-md-3'>
        <Icon icon='fa6-solid:award' fontSize={32} color='red' /> {movie.Awards}
      </div>
    </div>
  )
}

export default MovieDetailPart
