import myFace from '../images/photo_id-220.jpg'
import { More } from './more'

export const Header = () => {
    return (
        <section>
            <img src={myFace} className="portrait" alt="mon portrait" />
            <h1>Frédéric Duchesne</h1>
            <h2>Développeur Web</h2>
            <p>Bonjour, je m'appelle <strong>Frédéric Duchesne</strong>, je suis <strong>développeur web</strong>, plutôt orienté vers les <strong>projets internationaux</strong> avec une forte préférence pour l'<strong>Amérique latine</strong>, disponible pour une collaboration en <strong>télétravail</strong> en tant que <strong>salarié ou freelance</strong>.</p>
            <More />
        </section>
    )
}
    