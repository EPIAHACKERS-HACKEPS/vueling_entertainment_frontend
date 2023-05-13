import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { addScore } from '../../reducers/trivialReducer'

const TrivialScore = () => {
  const questions = useSelector((state: RootState) => state.question.questions)
  const dispatch = useDispatch()
  const score = useSelector((state: RootState) => state.trivial.score)
  useEffect(() => {
    questions.forEach((question) => {
      if (question.answer === question.correctAnswer) {
        dispatch(addScore)
      }
    })
  }, [questions])

  return (
    <>
      <h1>Score</h1>
      <h2>{score}</h2>
    </>
  )
}

export default TrivialScore
