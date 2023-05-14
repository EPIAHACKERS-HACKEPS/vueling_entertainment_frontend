import {
  ModalActions,
  ModalButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
  ModalTitle
} from './styles'
import React from 'react'

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel
}) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <p>{message}</p>
        <ModalActions>
          <ModalButton onClick={onCancel}>Cancel</ModalButton>
          <ModalButton onClick={onConfirm}>Confirm</ModalButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
