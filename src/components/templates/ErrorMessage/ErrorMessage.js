import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
  return (<div className={styles.wrapper}>{message}</div>)
}

export default ErrorMessage
