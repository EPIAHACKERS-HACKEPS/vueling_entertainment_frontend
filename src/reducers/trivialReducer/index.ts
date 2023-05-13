import { createSlice } from '@reduxjs/toolkit'
import { RootState, TrivialState } from '../../types'

const initialState: TrivialState = {
  records: [],
  savePoint: 0,
  score: 0,
  isGameOver: false
}

const trivialSlice = createSlice({
  name: 'trivial',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.records.push(action.payload)
    },
    setSavePoint: (state, action) => {
      state.savePoint = action.payload
    },
    addScore: (state, action) => {
      state.score = state.score + action.payload
    },
    setIsGameOver: (state, action) => {
      state.isGameOver = action.payload
    }
  }
})

export const { addRecord, setSavePoint, addScore, setIsGameOver } =
  trivialSlice.actions

export default trivialSlice.reducer

export const selectRecords = (state: RootState) => state.trivial.records
export const selectSavePoint = (state: RootState) => state.trivial.savePoint
export const selectScore = (state: RootState) => state.trivial.score
export const selectIsGameOver = (state: RootState) => state.trivial.isGameOver
