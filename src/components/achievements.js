import React from 'react'
import { MoreImagesModal } from "./more-images"

const achievements = [
    {
        imgName: 'photo_id-220.jpg',
        title: 'test3',
        description: '',
        linkUrl: 'https://ethnolatin.com',
        imageList: []
    },
    {
        imgName: 'enzym-1.png',
        title: 'enzym',
        description: 'Landing page enzym.io : mise en page, mise en place de boutons, traductions, etc.',
        linkUrl: 'https://www.enzym.io',
        imageList: ['enzym-1.png', 'enzym-2.png', 'enzym-3.png']
    },
    {
        imgName: 'oh-my-food-1.png',
        title: 'ohmyfood',
        description: "Page web mobile first en HTML et CSS à partir d'une maquette et d'un brief.",
        linkUrl: 'https://ethnolatin.github.io/FredericDuchesne_3_08092020/',
        imageList: ['oh-my-food-1-mobile.png', 'oh-my-food-2-mobile.png', 'oh-my-food-3-mobile.png', 'oh-my-food-3-tablet.png', 'oh-my-food-3-desktop.png']
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
                                    <button onClick={() => this.handleClick(achievement)}>Images du projet</button>
                                    <button onClick={() => {window.open(`${achievement.linkUrl}`, '_blank')}}>Page du projet</button>  
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}
