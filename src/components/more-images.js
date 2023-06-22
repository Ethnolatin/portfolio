import React from "react"
import Modal from "react-modal"
import styled from "@emotion/styled"
import { FaTimes } from "react-icons/fa"

Modal.setAppElement("#root")

export const MoreImagesModal = (props) => {
  const handleCloseModal = () => {
    props.handleCloseModal()
  }
  const { title, imageList, showModal } = props

  return (
    <Modal
      isOpen={showModal}
      contentLabel="vues supplémetaires du projet"
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <Overlay className="ReactModal__Overlay--after-open">
        <ModalContent>
          <StyledModaleHeader>
            <StyledModalClose>
              <FaTimes onClick={handleCloseModal} />
            </StyledModalClose>
            <H1>{title}</H1>
          </StyledModaleHeader>
          <StyledModalBody>
            {imageList.map((image) => {
              const imgUrl = require(`../images/${image}`).default
              return (
                <div key={title + image}>
                  <StyledImg src={imgUrl} alt={image} />
                </div>
              )
            })}
          </StyledModalBody>
        </ModalContent>
      </Overlay>
    </Modal>
  )
}

const ModalContent = styled.div`
  /* z-index: 6; */
  position: relative;
  overflow: auto;
  outline: none;
  max-width: 95vw;
  max-height: 95vh;
  left: 50%;
  right: auto;
  top: 50%;
  bottom: auto;
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.75);
  border-radius: 0.5rem;
  background-color: black;
  color: white;
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  &.ReactModal__Overlay--after-open {
    z-index: 5;
  }
`

const StyledModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  padding-bottom: 0;
`

const H1 = styled.h1`
  margin: 0 0 0.6rem 0;
`

const StyledModalBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  min-height: 50px;
`

const StyledImg = styled.img`
  display: inline-block;
  max-height: 80vh;
  max-width: 80vw;
  border: 1px solid white;
  border-radius: 0.4rem;
  padding: 1rem;
  margin: 0.5rem auto;
  object-fit: contain;
`

const StyledModaleHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--tertiary-color);
  background-color: black;
`
