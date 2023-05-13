import React, { useState } from 'react'
import {
  AddPlaceButton,
  AddPlaceForm,
  AddPlaceInput,
  JoinButton,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow
} from './styles'
import { Page } from '../Page'

interface Place {
  id: string;
  name: string;
  creator: string;
  joinedBy: string[];
}

const IGoTo: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([])
  const [newPlace, setNewPlace] = useState('')
  const [currentUserId, setCurrentUserId] = useState('user123') // Assume user ID is available in state

  const handleAddPlace = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPlace.trim() !== '') {
      const newPlaceObj: Place = {
        id: new Date().getTime().toString(),
        name: newPlace,
        creator: currentUserId,
        joinedBy: []
      }
      setPlaces([...places, newPlaceObj])
      setNewPlace('')
    }
  }

  const handleJoinPlace = (placeId: string) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === placeId && !place.joinedBy.includes(currentUserId)
          ? { ...place, joinedBy: [...place.joinedBy, currentUserId] }
          : place
      )
    )
  }

  return (
    <Page>
      <TableContainer>
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
              <TableRow
                key={place.id}
                isCreator={place.creator === currentUserId}
              >
                <TableCell>{place.name}</TableCell>
                <TableCell>{place.creator}</TableCell>
                <TableCell>{place.joinedBy.join(', ')}</TableCell>
                <TableCell>
                  {!place.joinedBy.includes(currentUserId) &&
                    place.creator !== currentUserId && (
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
      </TableContainer>
    </Page>
  )
}

export default IGoTo
