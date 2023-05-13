import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../types'

// Define initial state for seat number
const initialState = {
  seatNumber: ''
}

// Create the seatNumberReducer slice using createSlice
const seatNumberSlice = createSlice({
  name: 'seatNumber',
  initialState,
  reducers: {
    setSeatNumber: (state, action) => {
      state.seatNumber = action.payload
    }
  }
})

// Extract the action creator
export const { setSeatNumber } = seatNumberSlice.actions

// Export the seatNumberReducer
export default seatNumberSlice.reducer

// Extract the selector
export const selectSeatNumber = (state: RootState) => state.seatNumber
