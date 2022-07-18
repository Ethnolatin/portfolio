import React, { useContext, useState } from 'react' 
import { Context } from '../context/langContext'
import { MoreImagesModal } from "../components/more-images"
import texts from '../components/texts'


export const Achievements = () => {
    const {lang} = useContext(Context)
    const [showModal, setShowModal] = useState(false)
    const [selectedAchievement, setSelectedAchievement] = useState({})
    const text = texts[lang].achievements

    const achievements = [
        {
            imgName: 'enzym-welcome.png',
            title: 'enzym',
            description: text.desc1,
            linkUrl: `https://www.enzym.io/${text.enzymPage}`,
            imageList: ['enzym-welcome.png', 'enzym-map.png', 'enzym-team.png']
        },
        {
            imgName: 'groupomania-welcome.png',
            title: 'Groupomania',
            description: text.desc2,
            linkUrl: 'https://github.com/Ethnolatin/FredericDuchesne_7_04012021',
            imageList: ['groupomania-identification.png', 'groupomania-inscription.png', 'groupomania-homepage.png', 'groupomania-article.png', 'groupomania-userslist.png', 'groupomania-add.png', 'groupomania-modify.png']
        },
        {
            imgName: 'oh-my-food-1.png',
            title: 'ohmyfood',
            description: text.desc3,
            linkUrl: 'https://ethnolatin.github.io/FredericDuchesne_3_08092020/',
            imageList: ['oh-my-food-1-mobile.png', 'oh-my-food-2-mobile.png', 'oh-my-food-3-mobile.png', 'oh-my-food-3-tablet.png', 'oh-my-food-3-desktop.png']
        },
        {
            imgName: 'cv-header.png',
            title: 'CV',
            description: text.desc4,
            linkUrl: `https://ethnolatin.github.io/CV-html-css/${text.cvPage}`,
            imageList: []
        },
    ]

    const handleClick = (achievement) => {
        setSelectedAchievement(achievement)
        handleOpenModal()
    }
    
    const handleOpenModal = () => {
        setShowModal(true)
    }
    
    const handleCloseModal = () => {
        setShowModal(false)
    }
    
    return (
        <section id='achievements'>
            <h3>{text.title}</h3>
            <div className='list'>
                {achievements.map((achievement) => {
                    const imgUrl=require(`../images/${achievement.imgName}`).default
                    return (
                        <div className="card"  key={achievement.title}>
                            {showModal && 
                            <MoreImagesModal
                                title={selectedAchievement.title}
                                imageList={selectedAchievement.imageList}
                                showModal={showModal}
                                handleCloseModal={handleCloseModal}
                            />}
                            <div className="card-header">
                                <img src={imgUrl} alt={achievement.title} />
                            </div>
                            <div className="card-body">
                                <h1>{achievement.title}</h1>
                                <p>{achievement.description}</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => {window.open(`${achievement.linkUrl}`, '_blank')}}>{text.webPage}</button>  
                                {achievement.imageList.length ?
                                    <button onClick={() => handleClick(achievement)}>{text.images}</button>
                                    : ""}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
