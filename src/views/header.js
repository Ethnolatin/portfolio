import React, { useContext } from 'react'
import myFace from '../images/photo_id.png'
import headerLeft from '../images/header-left.png'
import headerRight from '../images/header-right.png'
import { HeaderButtons } from '../components/header-buttons'
import { Context } from '../context/langContext'
import texts from '../components/texts'


export const Header = () => {
    const {lang} = useContext(Context)
    const text = texts[lang].header

    return (
        <header>
            <img src={headerLeft} alt="" />
            <section>
                <img src={myFace} className="portrait" alt="mon portrait" />
                <h1>Frédéric Duchesne</h1>
                <h2>{text.title}</h2>
                <p>{text.std1}<b>{text.bold1}</b>{text.std2}<b>{text.bold2}</b>{text.std25}<b>{text.bold25}</b>{text.std3}<b>{text.bold3}</b>{text.std4}<b>{text.bold4}</b>{text.std5}<b>{text.bold5}</b>{text.std6}<b>{text.bold6}</b>.</p>
                <HeaderButtons />
            </section>
            <img src={headerRight} alt="" />
        </header>
    )
}
    