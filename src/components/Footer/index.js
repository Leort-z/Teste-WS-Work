import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer id={styles.header}>
      <pre id={styles.developedBy}>
        Desenvolvido por Leonardo Teixeira!
        <a href='https://github.com/leort-z' target='_blank' rel='noreferrer'>
          <FaGithub color='white' size='1rem' />
        </a>
        <a href='https://www.linkedin.com/in/leortz/' target='_blank' rel='noreferrer'>
          <FaLinkedinIn color='white' size='1rem' />
        </a>
      </pre>
    </footer>
  )
}
