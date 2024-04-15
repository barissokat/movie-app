/**
 * Asynchronously fetches data from a specified endpoint and returns the parsed JSON.
 *
 * This function sends an HTTP GET request to the provided endpoint URL. It uses the `fetch` API to make the request
 * and processes the response. If the response status indicates success (`response.ok` is true), the response is parsed
 * to JSON and returned. If the response is not successful, or if any other error occurs during the fetch operation,
 * an error is thrown and logged in the console.
 *
 * @param {string} endpoint - The URL to which the HTTP request is sent. This should be a fully formed API URL.
 *
 * @returns {Promise<Object|null>} A promise that resolves to the JSON object parsed from the response if the request
 *                                 is successful. If the request fails or an error occurs, the function catches the error,
 *                                 logs it to the console, and returns `null`.
 */
export const getFetcher = async (endpoint) => {
  const data = await fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error)
    })
  return data
}