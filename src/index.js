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
