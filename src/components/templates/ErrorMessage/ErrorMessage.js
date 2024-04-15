import styles from './ErrorMessage.module.css'

/**
 * Renders a simple error message wrapped in a styled div.
 *
 * This stateless functional component displays a given error message within a div that is styled using a CSS module.
 * The component expects a single prop:
 * - `message`: A string that contains the error message to be displayed.
 */
const ErrorMessage = ({ message }) => {
  return (<div className={styles.wrapper}>{message}</div>)
}

export default ErrorMessage
