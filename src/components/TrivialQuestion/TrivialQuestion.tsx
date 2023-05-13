import React from 'react'
import {
  AnswerContainer,
  AnswerOption,
  QuestionContainer,
  QuestionText
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { setAnswer } from '../../reducers/questionsReducer'
import {
  selectIsGameOver,
  setIsGameOver,
  setSavePoint
} from '../../reducers/trivialReducer'
import TrivialScore from '../TrivialScore/TrivialScore'

const TrivialQuestion = () => {
  const savePoint = useSelector((state: RootState) => state.trivial.savePoint)
  const question = useSelector(
    (state: RootState) => state.question.questions[savePoint]
  )
  const isGameOver = useSelector(selectIsGameOver)

  const dispatch = useDispatch()

  const clickHandler = (answer: string) => {
    dispatch(setAnswer({ answer, index: savePoint }))
    if (savePoint < 9) {
      dispatch(setSavePoint(savePoint + 1))
    } else {
      dispatch(setSavePoint(0))
      dispatch(setIsGameOver(true))
    }
  }

  return (
    <>
      {isGameOver
        ? (
        <TrivialScore />
          )
        : (
        <QuestionContainer>
          <QuestionText>{question.question}</QuestionText>
          <AnswerContainer>
            <AnswerOption onClick={() => clickHandler('a')}>
              {question.optionA}
            </AnswerOption>
            <AnswerOption onClick={() => clickHandler('b')}>
              {question.optionB}
            </AnswerOption>
            <AnswerOption onClick={() => clickHandler('c')}>
              {question.optionC}
            </AnswerOption>
            <AnswerOption onClick={() => clickHandler('d')}>
              {question.optionD}
            </AnswerOption>
          </AnswerContainer>
        </QuestionContainer>
          )}
    </>
  )
}

export default TrivialQuestion
