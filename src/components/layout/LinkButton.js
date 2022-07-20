import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

/* Recebendo no botão o link de redirect e text {para onde vai, texto} */
function LinkButton({ to, text }) {
  return (
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  )
}

export default LinkButton