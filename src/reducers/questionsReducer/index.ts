import { createSlice } from '@reduxjs/toolkit'
import { QuestionState } from '../../types'

const initialState: QuestionState = {
  questions: []
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      console.log(state, action)
      state.questions[action.payload.index].answer = action.payload.answer
    },
    setQuestions: (state, action) => {
      state.questions = action.payload
    }
  }
})

export const { setAnswer, setQuestions } = questionsSlice.actions

export default questionsSlice.reducer
