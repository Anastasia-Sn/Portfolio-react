// import { IoLogoLinked, IoLogoGithub } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';
import '../../App.css';
import contact from '../../img/contact.png';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <h2 className={`${styles.title} ${"title"}`}>c<span className="rose">o</span>ntact me.</h2>
            <div className={styles.email}>
              <p className={styles.sub}>email:</p>
              <p className={styles.name}>my_name@gmail.com</p>
            </div>
            <div className={styles.telegram}>
              <p className={styles.sub}>telegram:</p>
              <p className={styles.name}>@nick_name</p>
            </div>
            <div className={styles.social}>
              <a className={styles.link} target="_blank" href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
              <a className={styles.link} target="_blank" href="https://github.com/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={contact} alt="computer"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact