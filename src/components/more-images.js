import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'

export class MoreImagesModal extends React.Component {

    handleCloseModal = () => {
        this.props.handleCloseModal()
    }

    render() {
        console.log(this.props)
        const {title, imageList, showModal} = this.props
        return (
            <Modal
                className='modale'
                isOpen={showModal}
                contentLabel="vues supplémetaires du projet"
                onRequestClose={this.handleCloseModal}
                ariaHideApp={false}
            >
                <div className='modale-header'>
                    <FaTimes onClick={this.handleCloseModal} />
                </div>
                <h1>{title}</h1>
                <div className='modale-body'>
                    {imageList.map(image => {
                        const imgUrl=require(`../images/${image}`).default
                        return (
                            <div key={title+image} className='modale-image'>
                                <img src={imgUrl} alt={image} />
                            </div>
                        )
                    })}
                </div>
            </Modal>

        )
    }

}