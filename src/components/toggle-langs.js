import React from 'react'
import FrenchFlag from '../assets/france.svg'
import SpanishFlag from '../assets/spain.svg'
import EnglishFlag from '../assets/united-kingdom.svg'

export function ToggleLangs() {

    return (
        <div className='container-langs'>
            
            <img alt="drapeau français" src={FrenchFlag} />
            <img alt="drapeau anglais" src={EnglishFlag} />
            <img alt="drapeau espagnol" src={SpanishFlag} />

        </div>
    )
}
