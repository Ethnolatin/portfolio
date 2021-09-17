import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'


export class MoreImagesModal extends React.Component {

    handleCloseModal = () => {
        this.props.handleCloseModal()
    }

    render() {
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
                    <div className='modale-close'>
                        <FaTimes onClick={this.handleCloseModal} />
                    </div>
                    <h1>{title}</h1>
                </div>
                <div className='modale-body'>
                    {imageList.map(image => {
                        const imgUrl=require(`../images/${image}`).default
                        return (
                            <div key={title+image}>
                                <img src={imgUrl} alt={image} />
                            </div>
                        )
                    })}
                </div>
            </Modal>
        )
    }
}