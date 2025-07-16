import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://www.youtube.com/@gabrielbragadev" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gabrielbraga.gbs/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-braga-da-silva/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
      </p>
    </footer>
  )
}


export default Footer