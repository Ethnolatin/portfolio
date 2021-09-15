import React, { useContext } from 'react'
import { Context } from '../context/langContext'
import texts from '../assets/texts'

export const HeaderButtons = () => {
    const {lang} = useContext(Context)
    return (
        <div className="list">
            <button onClick={()=>{window.open('mailto:duchesne.fred@gmail.com', '_blank')}}>{texts[lang].headerButtons.email}</button>
            <button onClick={()=>{window.open(`https://ethnolatin.github.io/CV-html-css/${texts[lang].headerButtons.cvPage}`, '_blank')}}>{texts[lang].headerButtons.cv}</button>
        </div>
    )
}
