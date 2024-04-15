import { useState } from 'react'
import MoviePoster from '../../atoms/MoviePoster/MoviePoster'
import styles from './MovieCard.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={`${styles.wrapper} ${isVisible && styles.wrapperHover}`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      <div className={styles.poster}>
        <div className={styles.typeIcon}>
          <Icon className={styles.icon} icon={movie.Type === 'movie' ? 'ic:baseline-local-movies' : 'fluent:movies-and-tv-16-filled'} fontSize={32} color='red' />
        </div>
        <MoviePoster movie={movie} />
      </div>
      {isVisible && (
        <div className={styles.body}>
          <div className='mt-auto'>
            <div className={styles.type}>{movie.Type} - {movie.Year}</div>
            <h5 className={styles.title}>{movie.Title}</h5>
            <div className={styles.moreWrapper}>
              <Link to={`movie/${movie.imdbID}`}>
                <div className={styles.more}>
                  Read More</div>
              </Link>
            </div>
            <div className={styles.idWrapper}>
              <small className={styles.id}># {movie.imdbID}</small>
            </div>
          </div>
        </div>
      )
      }
    </div >
  )
}

export default MovieCard
