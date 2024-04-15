import { createContext } from 'react'

const MoviesContext = createContext({ movies: {}, totalResults: '', response: '', error: '', setMovies: (m) => { } })

export { MoviesContext }