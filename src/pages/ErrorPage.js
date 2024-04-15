import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  const pageStyle = {
    width: '100%',
    height: 'calc(100vh - 60px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '32px'
  }

  return (
    <div id="error-page" style={pageStyle}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}