import { getFetcher } from './api_helper'

const apiUrl = process.env.REACT_APP_APIURL
const apiKey = process.env.REACT_APP_APIKEY

const updatePageNumber = (url, pageNumber) => {
  const urlObject = new URL(url)
  urlObject.searchParams.set('page', pageNumber)
  return urlObject.toString()
}

export const fetchMoviesByQuery = async (queryString, page) => {
  let endpoint = `${apiUrl}?apikey=${apiKey}&plot=full&${queryString}`

  endpoint = updatePageNumber(endpoint, page)

  return await getFetcher(endpoint)
}

export const fetchMovieByImdbID = async (imdbID) => {
  let endpoint = `${apiUrl}?apikey=${apiKey}&plot=full&i=${imdbID}`

  endpoint = updatePageNumber(endpoint)

  return await getFetcher(endpoint)
}

export const encodeURIComponents = (title, type, year) => {
  const titleEncoded = encodeURIComponent(title)
  let query = '&s=' + titleEncoded

  if (type !== '' && type !== 'all') {
    const searchTypeEncoded = encodeURIComponent(type)
    query += '&type=' + searchTypeEncoded
  }
  if (year !== undefined && year !== '') {
    const yearEncoded = encodeURIComponent(year)
    query += '&y=' + yearEncoded
  }

  return query
}