import { useRef, useState } from 'react'
import { encodeURIComponents } from '../../helper/backend_helper'

const SearchBar = ({ totalResults, onGetSearchTerm }) => {
  const titleElem = useRef(null)
  const typeRef = useRef('')
  const yearElem = useRef('')
  const [filterVisible, setFilterVisible] = useState(false)

  /**
   * Prepares and encodes query elements for API requests based on user input.
   *
   * This function collects values from user inputs tied to React refs (`titleElem`, `typeRef`, and `yearElem`)
   * and passes them to the `encodeURIComponents` function to construct a properly encoded URL query string.
   * This is crucial for generating accurate and URL-safe query parameters for searching an external API or resource.
   *
   * - `titleElem`: A ref to the input element for the title, extracting the current value if available.
   * - `typeRef`: A ref to the input element for the type of search, assumed to be a fixed value (not obtained from `.current.value`).
   * - `yearElem`: A ref to the input element for the year, extracting the current value if available.
   *
   * @returns {string} - A URL-encoded string containing the search parameters, which can be directly appended to a query URL.
   */
  const prepareQueryElements = () => {
    const title = titleElem.current?.value
    const searchType = typeRef.current
    const year = yearElem.current?.value

    return encodeURIComponents(title, searchType, year)
  }

  /**
   * Handles the search operation triggered by a user action, such as clicking a search button.
   *
   * This function orchestrates the search process by:
   * 1. Calling `prepareQueryElements` to gather and encode user inputs into a query string.
   * 2. Passing the generated query string to `onGetSearchTerm`, a function likely responsible for executing the search
   *    or updating state with the search term for further processing.
   *
   * `prepareQueryElements` is assumed to access input fields indirectly via React refs and return a URL-encoded string.
   * `onGetSearchTerm` should be a prop or context-provided function that handles the application's response to the new search term.
   */
  const searchHandler = () => {
    const queryString = prepareQueryElements()

    onGetSearchTerm(queryString)
  }

  /**
   * Handles key down events for initiating a search when the 'Enter' key is pressed.
   *
   * This function listens for key down events within an input field or component and triggers the search process
   * when the 'Enter' key is specifically pressed. It performs the following steps:
   * 1. Checks if the pressed key is 'Enter'.
   * 2. Calls `prepareQueryElements` to collect and encode user inputs (like title, type, and year) from various input fields.
   * 3. Passes the resulting query string to `onGetSearchTerm`, which should handle the search execution or update the application state.
   *
   * This implementation ensures that searches can be conveniently initiated by pressing 'Enter', enhancing user experience
   * by providing a quick and accessible way to submit searches without requiring a mouse click.
   */
  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      const queryString = prepareQueryElements()

      onGetSearchTerm(queryString)
    }
  }

  /**
   * Handles changes to the 'type' input field, updating the state or reference accordingly.
   *
   * This function is triggered whenever the value of the 'type' input field changes. It directly updates the `typeRef`:
   *   - `typeRef.current`: This is presumably a reference to a variable stored with React's useRef hook. The function updates
   *     this ref's current value to the new value entered by the user in the 'type' input field.
   *
   * The updated value in `typeRef` can then be used elsewhere in the application, such as in constructing a search query,
   * ensuring that the latest user selection is incorporated.
   */
  const typeChangeHandler = (e) => {
    typeRef.current = e.target.value
  }

  /**
   * Toggles the visibility of the search filters and resets filter values if they are currently visible.
   *
   * This function handles two main actions:
   * 1. If the filters are currently visible (`filterVisible` is true), it resets the filter values:
   *    - `typeRef.current` is set to an empty string, clearing any type filter that might have been set.
   *    - `yearElem.current` is also set to an empty string, clearing the year filter.
   *    This ensures that when filters are made invisible and then visible again, they start with a clean state.
   * 2. Toggles the `filterVisible` state to show or hide the filter UI components by updating its state.
   *    This is done by passing a function to `setFilterVisible` that negates the previous state, thus toggling the visibility.
   *
   * The function is typically used in conjunction with UI elements like buttons that control the display of filters,
   * allowing users to easily hide and reset or show the filters as needed.
   */
  const filterHandler = () => {
    if (filterVisible) {
      typeRef.current = ''
      yearElem.current = ''
    }
    setFilterVisible(prev => !prev)
  }

  return (
    <div className='container-fluid c-searchbar--wrapper'>
      <div className='c-searchbar--search-term'>
        <input
          ref={titleElem}
          type='text'
          id='title'
          name='title'
          placeholder="Search by movie's title"
          onKeyDown={keyDownHandler}
        />
        {filterVisible && (
          <div className='c-filter--wrapper'>
            <div className='c-filter--types' onChange={typeChangeHandler}>
              <input type='radio' id='all' name='type' value='all' onKeyDown={keyDownHandler} />
              <label htmlFor='all'>All</label>
              <input type='radio' id='movie' name='type' value='movie' onKeyDown={keyDownHandler} />
              <label htmlFor='movie'>Movie</label>
              <input type='radio' id='series' name='type' value='series' onKeyDown={keyDownHandler} />
              <label htmlFor='series'>Series</label>
              <input type='radio' id='episode' name='type' value='episode' onKeyDown={keyDownHandler} />
              <label htmlFor='episode'>Episode</label>
            </div>

            <div className='ms-3'>
              <input
                ref={yearElem}
                type='text'
                id='year'
                name='year'
                placeholder='year'
                onKeyDown={keyDownHandler}
              />
            </div>
          </div>
        )}

        <div className='c-searchbar--filter' onClick={filterHandler}>
          {filterVisible ? 'Clear' : 'Filter'}
        </div>

        <div className='c-searchbar--button' onClick={searchHandler}>
          <span>Search</span>
        </div>
      </div>
      {totalResults !== undefined && (
        <div className='ms-auto'>
          <span className='me-3 fw-bold' style={{ position: 'relative', top: 11 }}>
            Total Results: {totalResults}
          </span>
        </div>
      )}
    </div>
  )
}

export default SearchBar
