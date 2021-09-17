import React, { useContext } from 'react'
import { Context } from '../context/langContext'
import texts from '../assets/texts'


export const SlidingText = () => {
    const {lang} = useContext(Context)
    const text = texts[lang].slider
    
    return (
        <div className='slider'>
            <p>
                - {text.part1}<b>{text.part2}</b> - {text.part3}<em>{text.part4}</em>) -
            </p>
        </div>
    )
}
