import { useState } from 'react';
import styles from './Header.module.css';
import burger from './Burger.module.css'
import '../../App.css';

const Header = () => {

  const [burgerBtn, setBurgerBtn] = useState(false);

  const burgerHandler = () => setBurgerBtn(!burgerBtn);

  return (
    <>
      <header>
        <div className='container'>
          <div className={styles['box']}>
            <a className="logo" href="#"><span className='rose'>on</span>dev.</a>
            <nav className={styles.menu}>
              <ul>
                <li><a className={styles['link']} href="#about">about me</a></li>
                <li><a className={styles['link']} href="#portfolio">portfolio</a></li>
                <li><a className={styles['link']} href="#contact">contacts</a></li>
              </ul>
            </nav>
          </div>
          <div className={burger.menu} onClick={burgerHandler}>
            <div className={`${burger['menu__btn']} ${burgerBtn && (burger['menu__btn--active'])}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {burgerBtn && (
              <div className={burger.list}>
                <ul>
                  <li className={burger.item}><a href="#" className={burger.link}>home</a></li>
                  <li className={burger.item}><a href="#about" className={burger.link}>about me</a></li>
                  <li className={burger.item}><a href="#portfolio" className={burger.link}>portfolio</a></li>
                  <li className={burger.item}><a href="#contact" className={burger.link}>contacts</a></li>
                </ul>
                <button className={`${burger.button} ${'btn'}`}>contact me</button>
              </div>)}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;