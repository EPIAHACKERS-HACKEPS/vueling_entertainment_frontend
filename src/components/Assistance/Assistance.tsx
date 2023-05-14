import React, { useState } from 'react'
import { Page } from '../Page'
import { Modal } from '../Modal'
import { Button, Message, Subtitle, Title } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'
import { Login } from '../Login'

const Assistance = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [modalTitle, setModalTitle] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const username = useSelector((state: RootState) => state.username.username)
  const seatNumber = useSelector(
    (state: RootState) => state.seatNumber.seatNumber
  )

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setModalTitle('You closed the modal')
    setModalMessage('You did not confirm the action')
  }

  const handleConfirmAction = () => {
    setIsModalOpen(false)
    setModalTitle('You confirmed the action')
    setModalMessage('The helper will be notified')
  }
  return (
    <Page>
      <></>
      {username && seatNumber
        ? (
        <>
          <Modal
            isOpen={isModalOpen}
            title={'Assistance required'}
            message={
              'If you confirm, the helper will be notified and will contact you shortly'
            }
            onConfirm={handleConfirmAction}
            onCancel={handleCloseModal}
          />
          <Title>Assistance</Title>
          <Subtitle>{modalTitle}</Subtitle>
          <Message>{modalMessage}</Message>
          <Button onClick={handleOpenModal}>Open modal</Button>
        </>
          )
        : (
        <>
          <Login title={'Login to get assisted'} />
        </>
          )}
    </Page>
  )
}

export default Assistance
