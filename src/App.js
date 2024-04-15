import { useContext } from 'react'
import { MoviesContext } from './context/MoviesContext'
import MoviesGrid from './components/templates/MoviesGrid'
import Welcome from './components/templates/Welcome'
import ErrorMessage from './components/templates/errorMessage/ErrorMessage'
import './App.css'

function App() {
  const {movies, totalResults, response, error} = useContext(MoviesContext)

  if (movies === undefined && response === undefined) {
    return (<Welcome />)
  }

  if (error !== undefined) {
    return (<ErrorMessage message={error} />)
  }

  return (
    <MoviesGrid />
  )
}

export default App
