import React, { useContext } from 'react'
import { Context } from '../context/langContext'
import texts from '../components/texts'


export const Skills = () => {
    const {lang} = useContext(Context)
    const text = texts[lang].skills

    const skills = ['JavaScript', 'ReactJS', 'HTML / CSS', 'Sass / @emotion/styled', 'Git / Github', `${text.english} / ${text.spanish}`]
    const notions = ['TypeScript', 'Jest', 'Tailwind CSS', `SEO / ${text.access}`, 'NodeJS / Express', 'API REST', 'MongoDB / MySQL']
    const inprogress = ['Wordpress', 'SvelteJS', 'NextJS', 'GraphQL', 'Redux']
    
    return (
        <section id='skills'>
            <h3>{text.title1}</h3>
            <div className='list'>
                {skills.map((skill, index) => {
                    return (<p key={index} className='skill'><strong>{skill}</strong></p>)
                })}
            </div>
            <h4>{text.title2}</h4>
            <div className='list'>
                {notions.map((notion, index) => {
                    return (<p key={index} className='notion'>{notion}</p>)
                })}
            </div>
            <h4>{text.title3}</h4>
            <div className='list'>
                {inprogress.map((wip, index) => {
                    return (<p key={index} className='wip'>{wip}</p>)
                })}
            </div>
        </section>
    )
}