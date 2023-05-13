import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SubmitButton, Title, UsernameForm, UsernameInput } from './styles'
import { setUsername } from '../../reducers/usernameReducer'

const mockedArrivalCity = 'Madrid'

const TrivialLogin = () => {
  const dispatch = useDispatch()
  const [newUsername, setNewUsername] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(setUsername(newUsername))
    setNewUsername('')
  }

  return (
    <>
      <Title>Trivial of {mockedArrivalCity}</Title>
      <UsernameForm onSubmit={handleSubmit}>
        <UsernameInput
          type="text"
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
          placeholder="Enter your username"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </UsernameForm>
    </>
  )
}

export default TrivialLogin
