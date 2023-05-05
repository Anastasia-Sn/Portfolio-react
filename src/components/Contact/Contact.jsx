// import { IoLogoLinked, IoLogoGithub } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';
import '../../App.css';
import contact from '../../img/contact.png';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__box}>
            <h2 className={`${styles["contact__title"]} ${"title"}`}>c<span className="rose">o</span>ntact me.</h2>
            <div className={styles.contact__email}>
              <p className={styles.contact__sub}>email:</p>
              <p className={styles.contact__name}>my_name@gmail.com</p>
            </div>
            <div className={styles.contact__telegram}>
              <p className={styles.contact__sub}>telegram:</p>
              <p className={styles.contact__name}>@nick_name</p>
            </div>
            <div className={styles.contact__social}>
              <a className={styles.contact__link} target="_blank" href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
              <a className={styles.contact__link} target="_blank" href="https://github.com/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={styles.contact__img}>
            <img src={contact} alt="computer"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact