import './styles/css/style.css'
import { Navbar } from './components/navbar'
import { UpArrow } from './components/up-arrow'
import { Header } from './views/header'
import { SlidingText } from './components/sliding-text'
import { Skills } from './views/skills'
import { Experience } from './views/experience'
import { Achievements } from './views/achievements'
import { AboutMe } from './views/about-me'
import ContextProvider from './context/langContext'


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
