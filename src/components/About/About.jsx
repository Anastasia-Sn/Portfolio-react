import styles from './About.module.css';
import '../../App.css';
import aboutPhoto from '../../img/about-photo.png';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.photo}>
            <img src={aboutPhoto} alt="computer"/>
          </div>
          <div className={styles.box}>
            <h2 className={`${styles.title} ${"title"}`}>ab<span className="rose">o</span>ut me.</h2>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ehndu a
              commodo consequat.
              Duis aute irure dolor in repreherit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About