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