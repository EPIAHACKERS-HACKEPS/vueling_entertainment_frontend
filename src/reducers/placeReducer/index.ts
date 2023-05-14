import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Place, PlaceState } from '../../types'

const initialState: PlaceState = {
  places: []
}

export interface PlacePayload {
  id: string;
  name: string;
}

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    addPlace: (state, action: PayloadAction<Place>) => {
      console.log(action.payload)
      state.places.push({
        id: action.payload.id,
        name: action.payload.name || action.payload.place,
        creator: action.payload.creator || action.payload.username,
        joinedBy:
          action.payload.joinedBy || action.payload.assitants.split(',')
      })
    },
    joinPlace: (state, action: PayloadAction<PlacePayload>) => {
      const index = state.places.findIndex(
        (place) => place.id === action.payload.id
      )
      if (index !== -1) {
        state.places[index].joinedBy.push(action.payload.name)
        const myHeaders = new Headers()
        myHeaders.append('Accept', 'application/json')

        const formdata = new FormData()
        formdata.append('username', action.payload.name)
        formdata.append('place', state.places[index].name)

        const requestOptions: RequestInit = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        }

        fetch('http://127.0.0.1/places', requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log('error', error))
      }
    }
  }
})

export const { addPlace, joinPlace } = placeSlice.actions

export default placeSlice.reducer
