import './App.css';
import "@fontsource/nunito";
import Header from './components/Header/Header';
import HeroPage from './components/HeroPage/HeroPage';
import topBtn from './img/arrow/top.png'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <a href="#" className="topbutton">
        <img src={topBtn} alt="arrow-top"/>
      </a>
      <Header />
      <main>
        <HeroPage />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}

export default App;
