import React, { useContext } from 'react'
import { Context } from '../context/langContext'
import texts from '../components/texts'


export const AboutMe = () => {
    const {lang} = useContext(Context)
    const text = texts[lang].aboutMe
    const items = text.items

    return (
        <section id="aboutMe">
            <h3>{text.title}</h3>
            <div className='list items'>
                {items.map((item, index) => {
                    const imgUrl=require(`../images/${item.imgName}`).default
                    return (
                        <div
                            key={index}
                            className='card items' 
                            onClick={() => {window.open(`${item.linkUrl}`, '_blank')}}
                        >
                            <div className="card-header">
                                <img src={imgUrl} alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}