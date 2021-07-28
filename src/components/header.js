import myFace from '../images/photo_id-220.jpg'
import headerLeft from '../images/header-left.png'
import headerRight from '../images/header-right.png'
import { HeaderButtons } from './header-buttons'

export const Header = () => {
    return (
        <header>
            <img src={headerLeft} alt="" />
            <section>
                <img src={myFace} className="portrait" alt="mon portrait" />
                <h1>Frédéric Duchesne</h1>
                <h2>Développeur Web</h2>
                <p>Bonjour, je m'appelle <strong>Frédéric Duchesne</strong>, je suis <strong>développeur web</strong>, avec une bonne <strong>expérience de l'entreprise</strong> et du travail dans un <strong>contexte international</strong>, disponible pour une collaboration en <strong>télétravail</strong> en tant que <strong>salarié ou freelance</strong>.</p>
                <HeaderButtons />
            </section>
            <img src={headerRight} alt="" />
        </header>
    )
}
    