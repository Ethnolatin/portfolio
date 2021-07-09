import React from 'react'
import { MoreImagesModal } from "./more-images"

const achievements = [
    {
        imgName: 'enzym-welcome.png',
        title: 'enzym',
        description: 'Participation à la landing page enzym.io.',
        linkUrl: 'https://www.enzym.io',
        imageList: ['enzym-welcome.png', 'enzym-map.png', 'enzym-team.png']
    },
    {
        imgName: 'groupomania-welcome.png',
        title: 'Groupomania',
        description: "MVP de réseau social d'entreprise façon Reddit (ReactJS - NodeJS - MySQL)",
        linkUrl: 'https://github.com/Ethnolatin/FredericDuchesne_7_04012021',
        imageList: ['groupomania-identification.png', 'groupomania-inscription.png', 'groupomania-homepage.png', 'groupomania-article.png', 'groupomania-userslist.png', 'groupomania-add.png', 'groupomania-modify.png']
    },
    {
        imgName: 'oh-my-food-1.png',
        title: 'ohmyfood',
        description: "Page web mobile first en HTML et CSS à partir d'une maquette et d'un brief.",
        linkUrl: 'https://ethnolatin.github.io/FredericDuchesne_3_08092020/',
        imageList: ['oh-my-food-1-mobile.png', 'oh-my-food-2-mobile.png', 'oh-my-food-3-mobile.png', 'oh-my-food-3-tablet.png', 'oh-my-food-3-desktop.png']
    },
    {
        imgName: 'cv-header.png',
        title: 'CV',
        description: 'Mon CV en ligne en HTML et CSS responsive',
        linkUrl: 'https://ethnolatin.github.io/CV-html-css/',
        imageList: []
    },
    
]

export class Achievements extends React.Component {

    constructor () {
        super();
        this.state = {
        showModal: false,
        selectedAchievement: {}
        }
    }


    handleClick = (selectedAchievement) => {
        this.setState({ selectedAchievement: selectedAchievement })
        this.handleOpenModal()
    }
    
    handleOpenModal = () => {
        this.setState({ showModal: true })
    }
    
    handleCloseModal = () => {
        this.setState({ showModal: false })
    }
    

    render() {
        return (
            <section>
                <h3>Réalisations</h3>
                <div className='list'>
                    {achievements.map((achievement) => {
                        const imgUrl=require(`../images/${achievement.imgName}`).default
                        return (
                            <div className="card"  key={achievement.title}>
                                {this.state.showModal && 
                                <MoreImagesModal
                                    title={this.state.selectedAchievement.title}
                                    imageList={this.state.selectedAchievement.imageList}
                                    showModal={this.state.showModal}
                                    handleCloseModal={this.handleCloseModal}
                                />}
                                <div className="card-header">
                                    <img src={imgUrl} alt={achievement.title} />
                                </div>
                                <div className="card-body">
                                    <h1>{achievement.title}</h1>
                                    <p>{achievement.description}</p>
                                </div>
                                <div className="card-footer">
                                    <button onClick={() => {window.open(`${achievement.linkUrl}`, '_blank')}}>Page web</button>  
                                    {achievement.imageList.length ?
                                        <button onClick={() => this.handleClick(achievement)}>Images</button>
                                        : ""}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}
