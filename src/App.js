import './styles/css/style.css';
import { Navbar } from './components/navbar'
import { UpArrow } from './components/up-arrow'
import { Header } from './components/header'
import { Skills } from './components/skills'
import { Experience } from './components/experience'
import { Achievements } from './components/achievements'
import { AboutMe } from './components/about-me'


function App() {

  return (
    <main>
      <Navbar />
      <UpArrow />
      <Header />
      <Skills />
      <Achievements />
      <Experience />
      <AboutMe />
    </main>
  )
}

export default App;
