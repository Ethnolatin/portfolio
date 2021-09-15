import './styles/css/style.css';
import { Navbar } from './components/navbar'
import { UpArrow } from './components/up-arrow'
import { Header } from './components/header'
import { SlidingText } from './components/sliding-text'
import { Skills } from './components/skills'
import { Experience } from './components/experience'
import { Achievements } from './components/achievements'
import { AboutMe } from './components/about-me'
import ContextProvider from './context/langContext';

function App() {

  return (
    <main>
      <ContextProvider>
        <Navbar />
        <UpArrow />
        <Header />
        <SlidingText />
        <Skills />
        <Achievements />
        <Experience />
        <AboutMe />
      </ContextProvider>
    </main>
  )
}

export default App;
