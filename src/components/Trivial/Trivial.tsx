import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types'
import { TrivialLogin } from '../TrivialLogin'
import { Page } from '../Page'
import { TrivialQuestion } from '../TrivialQuestion'
import { setQuestions } from '../../reducers/questionsReducer'

const Trivial = () => {
  const username = useSelector((state: RootState) => state.username.username)
  const [usernameValid, setUsernameValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    setLoading(true)
    fetch('http://127.0.0.1/questions', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setQuestions(result))
        setLoading(false)
      })
      .catch((error) => console.log('error', error))
  }, [])

  useEffect(() => {
    if (username.length > 0) {
      setUsernameValid(true)
    }
  }, [username])
  return (
    <Page>
      {usernameValid
        ? (
            loading
              ? (
          <h1>Loading...</h1>
                )
              : (
          <TrivialQuestion />
                )
          )
        : (
        <TrivialLogin />
          )}
    </Page>
  )
}

export default Trivial
