import './styles/css/style.css';
import { Header } from './components/header'
import { Skills } from './components/skills'
import { Experience } from './components/experience'
import { Achievements } from './components/achievements'

function App() {

  return (
    <main>
      <Header />
      <Skills />
      <Achievements />
      <Experience />
    </main>
    
  )
}

export default App;
