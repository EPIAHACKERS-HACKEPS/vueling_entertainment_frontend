import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FlightInfo, FlightState, RootState } from '../../types'

const initialState: FlightState = {
  Condition: '',
  Icon: '',
  Departure: '',
  Arrival: '',
  DepartureDate: '',
  ArrivalDate: '',
  Temperature: 0.0
}

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFlight: (state, action: PayloadAction<FlightInfo>) => {
      state = {
        Departure: action.payload.origin_city,
        Arrival: action.payload.destination_city,
        DepartureDate: action.payload.origin_date,
        ArrivalDate: action.payload.destination_date,
        Temperature: action.payload.temperature,
        Condition: action.payload.condition,
        Icon: action.payload.icon.replace(
          '//cdn.weatherapi.com/',
          'http://127.0.0.1/public/'
        )
      }
      return state
    }
  }
})

export const { setFlight } = flightSlice.actions

export default flightSlice.reducer
export const selectFlight = (state: RootState) => state.flight
