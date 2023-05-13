import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Place, RootState } from '../../types'
import { addPlace, joinPlace } from '../../reducers/placeReducer'
import { Login } from '../Login'
import {
  AddPlaceButton,
  AddPlaceForm,
  AddPlaceInput,
  JoinButton,
  Table,
  TableCell,
  TableHeader,
  TableRow
} from './styles'
import { Page } from '../Page'
import { v4 as UUID } from 'uuid'

const Places: React.FC = () => {
  const [newPlace, setNewPlace] = useState('')
  const username = useSelector((state: RootState) => state.username.username)
  const places = useSelector((state: RootState) => state.place.places)
  const dispatch = useDispatch()

  const handleAddPlace = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPlace.trim() !== '') {
      const newPlaceObj: Place = {
        id: UUID(),
        name: newPlace,
        creator: username,
        joinedBy: []
      }
      dispatch(addPlace(newPlaceObj))
      setNewPlace('')
    }
  }

  const handleJoinPlace = (id: string) => {
    dispatch(joinPlace({ id, name: username }))
  }

  return (
    <Page>
      {!username
        ? (
        <Login title="Login to IGoTo" />
          )
        : (
        <>
          <Table>
            <thead>
              <tr>
                <TableHeader>Place</TableHeader>
                <TableHeader>Creator</TableHeader>
                <TableHeader>Joined By</TableHeader>
                <TableHeader>Action</TableHeader>
              </tr>
            </thead>
            <tbody>
              {places.map((place) => (
                <TableRow key={place.id} isCreator={place.creator === username}>
                  <TableCell>{place.name}</TableCell>
                  <TableCell>{place.creator}</TableCell>
                  <TableCell>{place.joinedBy.join(', ')}</TableCell>
                  <TableCell>
                    {!place.joinedBy.includes(username) &&
                      place.creator !== username && (
                        <JoinButton onClick={() => handleJoinPlace(place.id)}>
                          Join
                        </JoinButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <AddPlaceForm onSubmit={handleAddPlace}>
            <AddPlaceInput
              type="text"
              value={newPlace}
              onChange={(e) => setNewPlace(e.target.value)}
              placeholder="Enter a place to visit"
            />
            <AddPlaceButton type="submit">Add Place</AddPlaceButton>
          </AddPlaceForm>
        </>
          )}
    </Page>
  )
}

export default Places
