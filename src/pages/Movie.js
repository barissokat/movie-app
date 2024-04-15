import { fetchMovieByImdbID } from '../helper/backend_helper'
import { useLoaderData } from 'react-router-dom'
import MovieWrapper from '../components/organisms/MovieWrapper'

export async function loader({ params }) {
  const movie = await fetchMovieByImdbID(params.imdbID)
  return { movie }
}

const Movie = () => {
  const { movie } = useLoaderData()

  return (
    <MovieWrapper movie={movie} />
  )
}

export default Movie