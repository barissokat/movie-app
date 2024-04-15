import { useRef, useState } from 'react'
import { encodeURIComponents } from '../../helper/backend_helper'

const SearchBar = ({ totalResults, onGetSearchTerm }) => {
  const titleElem = useRef(null)
  const typeRef = useRef('')
  const yearElem = useRef('')
  const [filterVisible, setFilterVisible] = useState(false)

  const prepareQueryElements = () => {
    const title = titleElem.current?.value
    const searchType = typeRef.current
    const year = yearElem.current?.value

    return encodeURIComponents(title, searchType, year)
  }

  const searchHandler = () => {
    const queryString = prepareQueryElements()

    onGetSearchTerm(queryString)
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      const queryString = prepareQueryElements()

      onGetSearchTerm(queryString)
    }
  }

  const typeChangeHandler = (e) => {
    typeRef.current = e.target.value
  }

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
