import { createContext } from 'react'

/**
 * Creates a React context for managing and accessing movies data across the application.
 *
 * `MoviesContext` is set up to handle the state related to movies, including:
 *   - `movies`: An object that stores the movies data.
 *   - `totalResults`: A string to store the total number of results from a query.
 *   - `response`: A string to capture the response status of fetch requests.
 *   - `error`: A string to capture errors related to fetching movies.
 *   - `setMovies`: A function that allows updating the `movies` state.
 *
 * This context provides a way to pass down and manage movies data throughout the component tree
 * without having to prop drill. Components can subscribe to this context and re-render whenever
 * the context's value changes.
 */
const MoviesContext = createContext({ movies: {}, totalResults: '', response: '', error: '', setMovies: (m) => { } })

export { MoviesContext }