import { useEffect, useRef, useState } from 'react'
import SearchBar from "./SearchBar"
import '../../App.css'
import { fetchMoviesByQuery } from '../../helper/backend_helper'
import Loading from '../../components/templates/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { resetPage } from '../../redux/pageSlice'
import { MoviesContext } from '../../context/MoviesContext'

const AppLayout = (props) => {
  const responseRef = useRef([])
  const [loading, setLoading] = useState(false)
  const queryRef = useRef('')
  const dispatch = useDispatch()
  const pageNumber = useSelector((state) => state.page.value)

  useEffect(() => {
    if (queryRef.current !== '') {
      setLoading(true)
      fetchMoviesByQuery(queryRef.current, pageNumber).then(response => {
        responseRef.current = response
        setLoading(false)
      })
    }
  }, [pageNumber])


  const getSearchTermHandler = async (queryString) => {
    dispatch(resetPage())
    setLoading(true)
    queryRef.current = queryString
    fetchMoviesByQuery(queryRef.current, 1).then(response => {
      responseRef.current = response
      setLoading(false)
    })
  }

  return (
    <MoviesContext.Provider value={[responseRef.current.Search, responseRef.current.totalResults, responseRef.current.Response, responseRef.current.Error, getSearchTermHandler]}>
      <div className='App'>
        <SearchBar totalResults={responseRef.current.totalResults} onGetSearchTerm={getSearchTermHandler} />
        <main>
          <div className='mt-5 pt-2'>
            {loading
              ? (<Loading />)
              : (props.children)}
          </div>
        </main>
      </div>
    </MoviesContext.Provider>
  )
}

export default AppLayout
