import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Place, PlaceState } from '../../types'

const initialState: PlaceState = {
  places: [
    {
      id: '1',
      name: 'Taipei',
      creator: '1',
      joinedBy: ['1', '2']
    }
  ]
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
      state.places.push(action.payload)
    },
    joinPlace: (state, action: PayloadAction<PlacePayload>) => {
      const index = state.places.findIndex(
        (place) => place.id === action.payload.id
      )
      if (index !== -1) {
        state.places[index].joinedBy.push(action.payload.name)
      }
    }
  }
})

export const { addPlace, joinPlace } = placeSlice.actions

export default placeSlice.reducer
