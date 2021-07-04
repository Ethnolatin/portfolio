import React from 'react'
import { MoreImagesModal } from "./more-images"

export class AchievementData extends React.Component {

    constructor () {
        super();
        this.state = {
        showModal: true
        }

        // this.handleOpenModal = this.handleOpenModal.bind(this)
        // this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    // handleOpenModal = () => {
    //     this.setState({ showModal: true })
    // }
    
    handleCloseModal = () => {
        this.setState({ showModal: false })
    }
    
    render() {
        const {selectedAchievement} = this.props
        console.log('ok')
        return (

            <MoreImagesModal
                title={selectedAchievement.title}
                imageList={selectedAchievement.imageList}
                showModal={this.state.showModal}
                handleCloseModal={this.handleCloseModal}
            />

        )
    }
}