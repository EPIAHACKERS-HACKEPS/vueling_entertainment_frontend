import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SubmitButton, Title, UsernameForm, UsernameInput } from './styles'
import { setUsername } from '../../reducers/usernameReducer'
import { RootState } from '../../types'
import { setSeatNumber } from '../../reducers/seatNumberReducer'

interface LoginProps {
  title: string;
}

const Login = (props: LoginProps) => {
  const dispatch = useDispatch()
  const [newUsername, setNewUsername] = useState('')
  const [newSeatNumber, setNewSeatNumber] = useState('')
  const destination = useSelector((state: RootState) => state.flight.Arrival)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(setUsername(newUsername))
    dispatch(setSeatNumber(newSeatNumber))
    setNewUsername('')
    setNewSeatNumber('')
  }

  return (
    <>
      <Title>{props.title}</Title>
      <UsernameForm onSubmit={handleSubmit}>
        <UsernameInput
          type="text"
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
          placeholder="Enter your username"
        />
        <UsernameInput
          type="text"
          value={newSeatNumber}
          onChange={(event) => setNewSeatNumber(event.target.value)}
          placeholder="Enter your seat number"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </UsernameForm>
    </>
  )
}

export default Login
