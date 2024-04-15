import { getFetcher } from './api_helper'

const apiUrl = process.env.REACT_APP_APIURL
const apiKey = process.env.REACT_APP_APIKEY

/**
 * Updates the query parameter for the page number in a URL.
 *
 * This function takes a URL and a page number, and updates the URL to include the specified page number as a query parameter.
 * It uses the URL and URLSearchParams APIs to parse and modify the URL string. This is particularly useful for managing
 * pagination in API requests or page links dynamically.
 *
 * @param {string} url - The original URL string where the page number needs to be updated or added.
 * @param {number} pageNumber - The new page number to set in the URL's query parameters.
 *
 * @returns {string} - The updated URL string with the new page number set in its query parameters.
 */
const updatePageNumber = (url, pageNumber) => {
  const urlObject = new URL(url)
  urlObject.searchParams.set('page', pageNumber)
  return urlObject.toString()
}

/**
 * Asynchronously fetches movies from the API based on a specified query string and page number.
 *
 * This function constructs an API request URL using a base URL, an API key, and additional query parameters.
 * It modifies the URL to incorporate pagination through the `updatePageNumber` function.
 * The actual API request is performed by the `getFetcher` function, which must return a Promise.
 *
 * @param {string} queryString - A string containing query parameters to filter the movie search. 
 *                               This should be URL-encoded and can include terms like 's=batman&type=movie'.
 * @param {number} page - The page number of the results to retrieve, aiding in pagination.
 *
 * @returns {Promise<Object>} A promise that resolves to the response from the API. The response format
 *                            typically includes details like total results and an array of movies.
 */
export const fetchMoviesByQuery = async (queryString, page) => {
  let endpoint = `${apiUrl}?apikey=${apiKey}&plot=full&${queryString}`

  endpoint = updatePageNumber(endpoint, page)

  return await getFetcher(endpoint)
}

/**
 * Asynchronously fetches detailed information about a movie from an API based on the provided IMDb ID.
 *
 * This function constructs a request URL using a base API URL and an API key, specifying a movie by its IMDb ID.
 * It appends 'plot=full' to request detailed plot information. The function incorrectly calls `updatePageNumber`,
 * which should not be used here since IMDb ID searches do not require pagination.
 *
 * @param {string} imdbID - The IMDb identifier for the movie, typically a string like 'tt0111161'.
 *
 * @returns {Promise<Object>} A promise that resolves to the detailed movie information retrieved from the API.
 *                            The structure of the returned object depends on the API's response schema but usually
 *                            includes title, year, genre, director, actors, plot, and other movie details.
 */
export const fetchMovieByImdbID = async (imdbID) => {
  let endpoint = `${apiUrl}?apikey=${apiKey}&plot=full&i=${imdbID}`

  endpoint = updatePageNumber(endpoint)

  return await getFetcher(endpoint)
}

/**
 * Encodes and constructs a query string for API requests based on provided movie attributes.
 *
 * This function takes movie title, type, and year, and returns a URL-encoded query string suitable for appending
 * to a base URL for movie search requests. The title is always included in the query, while type and year are optional.
 * The `encodeURIComponent` function is used to ensure special characters in the inputs are properly encoded to avoid
 * URL parsing errors.
 *
 * @param {string} title - The title of the movie to search for. This parameter is mandatory.
 * @param {string} type - The type of the content to search for (e.g., 'movie', 'series', 'episode'). 
 *                        Optional; if provided, it should not be empty or 'all'.
 * @param {string} year - The year of the movie's release. Optional; included in the query if it is defined and not empty.
 *
 * @returns {string} A query string that starts with '&s=' followed by the encoded movie title, and optionally includes
 *                   '&type=' and '&y=' for the type and year, if they are provided and valid.
 */
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