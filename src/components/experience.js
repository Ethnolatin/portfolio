import React, { useContext } from 'react'
import { Context } from '../context/langContext'
import texts from '../assets/texts'


export const Experience = () => {
    const {lang} = useContext(Context)
    const text = texts[lang].experience
    const experiences = text.items

    return (
        <section id='experience'>
            <h3>{text.title}</h3>
            <div className='list'>
                {experiences.map((experience, index) => {
                    return (
                        <article key={index} className='experience'>
                            <p><strong>{experience.title}</strong></p>
                            <p>{experience.content}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
