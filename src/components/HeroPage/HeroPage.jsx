import styles from './HeroPage.module.css';
import '../../App.css';
import photo from '../../img/photo.png';
import arrow from '../../img/arrow/arrow.png'

const HeroPage = () => {
  return (
    <section className={styles["hero-page"]}>
      <div className="container">
        <div className={styles["hero-page__view"]}>
          <div className={styles["hero-page__info"]}>
            <h1 className={styles["hero-page__title"]}><span className={styles.gray}>I'm a</span><br/>fr<span className="rose">on</span>tend<br/><span
              className={styles.blue}>dev</span>eloper</h1>
            <button className={`${styles["hero-page__btn"]} ${"btn"}`}>contact me</button>
          </div>
          <div className={styles["hero-page__photo"]}>
            <img src={photo} alt="my photo"/>
          </div>
        </div>
        <div className={styles["hero-page__arrow"]}>
          <img src={arrow} alt="arrow"/>
        </div>
      </div>
    </section>
  )
}

export default HeroPage;