import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsernameState } from '../../types'

const initialState: UsernameState = {
  username: ''
}

const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    }
  }
})

export const { setUsername } = usernameSlice.actions

export default usernameSlice.reducer
