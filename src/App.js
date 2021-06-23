import './styles/css/style.css';
import logo from './images/photo_id-220.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="mon portrait" />
        <h1>Bonjour !</h1>
        <p>Je m'appelle</p>
        <h2>Frédéric Duchesne</h2>
        <p>Je suis</p>
        <h3>développeur web</h3>
        <p>et ici vous trouverez bientôt</p>
        <h3>mon portfolio</h3>
      </header>
    </div>
  );
}

export default App;
