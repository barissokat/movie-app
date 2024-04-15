import { Icon } from '@iconify/react'
import styles from './NavigationButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { prev, next } from '../../../redux/pageSlice'

const NavigationButton = ({ direction, disabled }) => {
  const pageNumber = useSelector((state) => state.page.value)
  const dispatch = useDispatch()

  const icon = direction === 'prev' ? 'ooui:previous-ltr' : 'ooui:next-ltr'
  const page = direction === 'prev' ? pageNumber - 1 : pageNumber + 1

  /**
   * Handles page changes in a paginated application interface.
   *
   * This function adjusts the page number based on the user's navigation direction ('prev' for previous, 'next' for next).
   * It checks the current page number and the direction of navigation:
   * - If the direction is 'prev' (previous) and the current page number is not the first page (`pageNumber - 1 !== 0`), it dispatches the `prev()` action to decrement the page number.
   * - If the direction is 'next', it dispatches the `next()` action to increment the page number.
   *
   * This logic is integrated with Redux to manage the application state globally, allowing components that display page-dependent data to re-render with the new page content automatically.
   */
  const changePageHandler = (direction) => {
    if (pageNumber - 1 !== 0 && direction === 'prev') {
      dispatch(prev())
    } else if (direction === 'next') {
      dispatch(next())
    }
  }

  return (
    <div className={`${styles.wrapper} ${disabled && styles.disabled}`} onClick={() => changePageHandler(direction)}>
      {direction === 'next' && !disabled && page}<Icon icon={icon} width={102} />{direction === 'prev' && !disabled && page}
    </div>
  )
}

export default NavigationButton
