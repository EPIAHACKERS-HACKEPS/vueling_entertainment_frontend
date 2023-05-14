import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LeaderState } from '../../types'

const initialState: LeaderState = {
  leaderBoard: []
}

export interface LeaderInput {
  nickname: string;
  score: number;
  seat: string;
}

const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState,
  reducers: {
    updateLeaderBoard (state, action: PayloadAction<LeaderInput>) {
      state.leaderBoard = [
        ...state.leaderBoard,
        {
          username: action.payload.nickname,
          score: action.payload.score,
          seat: action.payload.seat
        }
      ]
    },
    setLeaderBoard (state, action: PayloadAction<LeaderState>) {
      state.leaderBoard = action.payload
    }
  }
})

export const { updateLeaderBoard, setLeaderBoard } = leaderBoardSlice.actions

export default leaderBoardSlice.reducer
