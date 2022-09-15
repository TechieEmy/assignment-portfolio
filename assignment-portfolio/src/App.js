import './App.css';
import Intro from './Components/Intro'
import About from './Components/About'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
     <Intro />
     <About />
     <Skills />
     <Portfolio />
     <Contact />
     <Footer/>
     
     
    </div>
  );
}

export default App;
