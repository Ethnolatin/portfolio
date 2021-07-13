import myFace from '../images/photo_id-220.jpg'
import { More } from './more'

export const Header = () => {
    return (
        <header>
            <section>
                <img src={myFace} className="portrait" alt="mon portrait" />
                <h1>Frédéric Duchesne</h1>
                <h2>Développeur Web</h2>
                <p>Bonjour, je m'appelle <strong>Frédéric Duchesne</strong>, je suis <strong>développeur web</strong>, avec une bonne expérience du travail dans un <strong>contexte international</strong>, disponible pour une collaboration en <strong>télétravail</strong> en tant que <strong>salarié ou freelance</strong>.</p>
                <More />
            </section>
        </header>
    )
}
    