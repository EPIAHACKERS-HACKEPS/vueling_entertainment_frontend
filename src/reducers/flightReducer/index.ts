import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FlightState, RootState } from '../../types'

const initialState: FlightState = {
  Departure: 'Barcelona',
  Arrival: 'Madrid',
  DepartureDate: '2024-05-13T04:00:00.000Z',
  ArrivalDate: '2024-05-14T05:35:00.000Z'
}

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setDeparture: (state, action: PayloadAction<string>) => {
      state.Departure = action.payload
    },
    setArrival: (state, action: PayloadAction<string>) => {
      state.Arrival = action.payload
    },
    setDepartureDate: (state, action: PayloadAction<string>) => {
      state.DepartureDate = action.payload
    },
    setArrivalDate: (state, action: PayloadAction<string>) => {
      state.ArrivalDate = action.payload
    }
  }
})

export const { setDeparture, setArrival, setDepartureDate, setArrivalDate } =
  flightSlice.actions

export default flightSlice.reducer

// Selector
export const selectFlight = (state: RootState) => state.flight
