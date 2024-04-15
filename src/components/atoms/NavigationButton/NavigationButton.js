import { Icon } from '@iconify/react'
import styles from './NavigationButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { prev, next } from '../../../redux/pageSlice'

const NavigationButton = ({ direction, disabled }) => {
  const pageNumber = useSelector((state) => state.page.value)
  const dispatch = useDispatch()

  const icon = direction === 'prev' ? 'ooui:previous-ltr' : 'ooui:next-ltr'
  const page = direction === 'prev' ? pageNumber - 1 : pageNumber + 1

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
