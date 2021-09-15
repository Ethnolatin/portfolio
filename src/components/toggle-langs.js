import React, { useContext } from 'react'
import FrenchFlag from '../assets/france.svg'
import SpanishFlag from '../assets/spain.svg'
import EnglishFlag from '../assets/united-kingdom.svg'
import { Context } from '../context/langContext'

export function ToggleLangs() {
    const  {toggleLang} = useContext(Context)
    return (
        <div className='container-langs'>
            <img alt="drapeau français" onClick={()=> toggleLang('FR')} src={FrenchFlag} />
            <img alt="drapeau anglais" onClick={()=> toggleLang('EN')} src={EnglishFlag} />
            <img alt="drapeau espagnol" onClick={()=> toggleLang('ES')} src={SpanishFlag} />
        </div>
    )
}
