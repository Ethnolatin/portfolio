import myFace from '../images/photo_id-220.jpg'
import headerLeft from '../images/header-left.png'
import headerRight from '../images/header-right.png'
import { HeaderButtons } from './header-buttons'
import texts from '../assets/texts'

export const Header = () => {
    return (
        <header>
            <img src={headerLeft} alt="" />
            <section>
                <img src={myFace} className="portrait" alt="mon portrait" />
                <h1>Frédéric Duchesne</h1>
                <h2>{texts['FR'].title}</h2>
                <p>{texts['FR'].intro}</p>
                <HeaderButtons />
            </section>
            <img src={headerRight} alt="" />
        </header>
    )
}
    