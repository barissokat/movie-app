import { Icon } from "@iconify/react/dist/iconify.js"
import { fetchMovieByImdbID } from "../helper/backend_helper"
import { Link, useLoaderData } from "react-router-dom"

export async function loader({ params }) {
  const movie = await fetchMovieByImdbID(params.imdbID)
  return { movie }
}

const Movie = () => {
  const { movie } = useLoaderData()

  return (
    <>
      {movie.Title}
      <Link to='/'>
        <Icon icon="material-symbols:close" />
      </Link>
    </>
  )
}

export default Movie