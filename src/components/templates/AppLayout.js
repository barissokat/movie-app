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

  /**
   * React effect hook for fetching movies when the page number changes.
   *
   * This useEffect is triggered whenever the `pageNumber` changes. Inside the effect:
   * - First, it checks if `queryRef.current` is not an empty string, ensuring there is a query to search with.
   * - If there is a valid query, it sets the loading state to true, indicating that a fetch operation is starting.
   * - It then calls `fetchMoviesByQuery` with the current query and page number. This function is assumed to return a promise that resolves to the fetched movie data.
   * - Once the data is fetched, it is stored in `responseRef.current` for other parts of the component to use, and the loading state is set to false.
   *
   * Dependencies:
   * - `pageNumber`: The effect depends solely on the `pageNumber`, meaning it will re-run only when this value changes.
   *
   * This setup effectively handles data fetching in a paginated scenario, ensuring that changing the page number fetches new data accordingly without reloading the entire component.
   */
  useEffect(() => {
    if (queryRef.current !== '') {
      setLoading(true)
      fetchMoviesByQuery(queryRef.current, pageNumber).then(response => {
        responseRef.current = response
        setLoading(false)
      })
    }
  }, [pageNumber])

  /**
   * Handles initiating a search based on a given query string and resets to the first page.
   *
   * This asynchronous function performs several key actions to manage the state and data fetching process:
   * 1. Dispatches `resetPage()` to ensure the pagination is reset back to the first page whenever a new search is triggered.
   * 2. Sets the loading state to true, indicating that data fetching is underway, which helps in showing a loading indicator on the UI.
   * 3. Updates `queryRef.current` with the new query string to store the latest query for potential future use.
   * 4. Calls `fetchMoviesByQuery` to asynchronously fetch movies based on the current query string and the reset page number (1).
   *    - Upon receiving the response, it stores this response in `responseRef.current` for other parts of the application to access.
   *    - Sets the loading state to false once data fetching is completed, signaling that the operation is done and updating the UI accordingly.
   *
   * This function is crucial for initiating new searches and managing the data flow and UI state in response to user input.
   */
  const getSearchTermHandler = async (queryString) => {
    dispatch(resetPage())
    setLoading(true)
    queryRef.current = queryString
    fetchMoviesByQuery(queryRef.current, 1).then(response => {
      responseRef.current = response
      setLoading(false)
    })
  }

  /**
  * Wraps the main App component with the MoviesContext.Provider to facilitate global state management.
  *
  * This component serves as the top-level provider for movie-related data, utilizing the MoviesContext to distribute
  * search results and associated data throughout the application. It provides the following context values:
  * - An array containing search results, total result count, API response status, and any errors that occurred during fetching.
  * - A handler function `getSearchTermHandler` for initiating searches based on a user-provided query.
  *
  * Structure:
  * - The `MoviesContext.Provider` passes down the array of context values to all consuming components within.
  * - Inside the provider, a `SearchBar` component is used, which takes the total result count and a handler to manage search input.
  * - A `main` element contains conditional rendering:
  *   - Displays a `Loading` component if the `loading` state is true, indicating ongoing data fetching.
  *   - Displays `props.children` (any children components passed to `App`) when not loading, which might include pages or other UI elements displaying movie data.
  *
  * This setup ensures that movie data and the ability to initiate new searches are seamlessly integrated across the application,
  * promoting efficient data flow and reusability of state management logic.
  */
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
