import { useState } from 'react';
import styles from './Header.module.css';
import '../../App.css';

const Header = () => {

  const [burgerBtn, setBurgerBtn] = useState(false);

  const burgerHandler = () => setBurgerBtn(!burgerBtn);

  return (
    <>
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.header__box}>
            <a className={`${styles['header__logo']} ${'logo'}`} href="#"><span className='rose'>on</span>dev.</a>
            <nav className={styles.menu}>
              <ul>
                <li><a className={styles['menu__link']} href="#about">about me</a></li>
                <li><a className={styles['menu__link']} href="#portfolio">portfolio</a></li>
                <li><a className={styles['menu__link']} href="#contact">contacts</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles['burger-menu']} onClick={burgerHandler}>
            <div className={`${styles['burger-menu__btn']} ${burgerBtn && (styles['burger-menu__btn--active'])}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {burgerBtn && (
              <div className={styles['burger-menu__list']}>
                <ul className={styles['burger-menu__ul']}>
                  <li className={styles['burger-menu__item']}><a href="#" className={styles['burger-menu__link']}>home</a></li>
                  <li className={styles['burger-menu__item']}><a href="#about" className={styles['burger-menu__link']}>about me</a></li>
                  <li className={styles['burger-menu__item']}><a href="#portfolio" className={styles['burger-menu__link']}>portfolio</a></li>
                  <li className={styles['burger-menu__item']}><a href="#contact" className={styles['burger-menu__link']}>contacts</a></li>
                </ul>
                <button className={`${styles['burger-menu__button']} ${'btn'}`}>contact me</button>
              </div>)}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;