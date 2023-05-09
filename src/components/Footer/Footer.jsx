import styles from './Footer.module.css';
import '../../App.css';

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className={styles.block}>
        <a className={`${styles["logo"]} ${"logo"}`} href="#"><span className="rose">on</span>dev.</a>
          <nav className={styles.menu}>
          <ul>
            <li><a className={styles.link} href="#about">about me</a></li>
            <li><a className={styles.link} href="#portfolio">portfolio</a></li>
            <li><a className={styles.link} href="#contact">contacts</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer