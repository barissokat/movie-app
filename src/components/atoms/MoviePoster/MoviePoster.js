import PosterNotFound from '../PosterNotFound/PosterNotFound'
import styles from './MoviePoster.module.css'

const MoviePoster = ({ movie }) => {
  return (
    <div className={styles.wrapper}>
      {movie?.Poster === 'N/A'
        ? (<PosterNotFound />)
        : (<img className={styles.image} src={movie?.Poster} alt={movie?.Title} />)}
    </div>
  )
}

export default MoviePoster
