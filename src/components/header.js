import React, { useContext } from 'react'
import myFace from '../images/photo_id-220.jpg'
import headerLeft from '../images/header-left.png'
import headerRight from '../images/header-right.png'
import { HeaderButtons } from './header-buttons'
import { Context } from '../context/langContext'
import texts from '../assets/texts'

export const Header = () => {
    const {lang} = useContext(Context)

    return (
        <header>
            <img src={headerLeft} alt="" />
            <section>
                <img src={myFace} className="portrait" alt="mon portrait" />
                <h1>Frédéric Duchesne</h1>
                <h2>{texts[lang].title}</h2>
                <p>{texts[lang].intro}</p>
                <HeaderButtons />
            </section>
            <img src={headerRight} alt="" />
        </header>
    )
}
    