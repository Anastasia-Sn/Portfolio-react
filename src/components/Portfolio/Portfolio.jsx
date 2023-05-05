import styles from './Portfolio.module.css';
import '../../App.css';
import build from '../../img/portfolio/build.png';
import interior from '../../img/portfolio/interior.png';
import ocean from '../../img/portfolio/ocean.png';
import plant from '../../img/portfolio/plant.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className={`${styles["portfolio__title"]} ${"title"}`}>my portf<span className="rose">o</span>lio.</h2>
        <div className={styles.portfolio__img}>
          <div className={styles.portfolio__card}>
            <img src={interior} alt="interior"/>
              <button className={styles.portfolio__btn}>more</button>
          </div>
          <div className={styles.portfolio__card}>
            <img src={build} alt="build"/>
            <button className={styles.portfolio__btn}>more</button>
          </div>
          <div className={styles.portfolio__card}>
            <img src={plant} alt="plant"/>
            <button className={styles.portfolio__btn}>more</button>
          </div>
          <div className={styles.portfolio__card}>
            <img src={ocean} alt="ocean"/>
            <button className={styles.portfolio__btn}>more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio