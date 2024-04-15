import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import store from './redux/store'
import AppLayout from './components/templates/AppLayout'
import App from './App'
import Movie, { loader as movieLoader } from './pages/Movie'
import ErrorPage from './pages/ErrorPage'
import reportWebVitals from './reportWebVitals'
import './index.css'

/**
 * Configures the browser router for the application using React Router.
 *
 * This router setup includes two main routes:
 * 1. The root route ('/'):
 *    - `element`: Renders the <App /> component when the user navigates to the base URL.
 *    - `errorElement`: Renders the <ErrorPage /> component if there's an error during rendering of the <App /> component or its children.
 * 
 * 2. The movie detail route ('/movie/:imdbID'):
 *    - `element`: Renders the <Movie /> component, designed to display detailed information about a movie.
 *    - `loader`: Uses the `movieLoader` function to fetch data before rendering the <Movie /> component. This loader
 *                function is expected to fetch movie details using the `imdbID` route parameter.
 *
 * This configuration ensures that the application has a clear navigational structure, with specific rendering behavior
 * for the root and detailed movie pages. It also demonstrates the use of dynamic routes and data loading in React Router.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'movie/:imdbID',
    element: <Movie />,
    loader: movieLoader
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
