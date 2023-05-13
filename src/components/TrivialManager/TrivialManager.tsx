import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types'
import { TrivialLogin } from '../TrivialLogin'
import { Page } from '../Page'

const TrivialManager = () => {
  const username = useSelector((state: RootState) => state.username.username)
  const [usernameValid, setUsernameValid] = useState(false)

  useEffect(() => {
    if (username.length > 0) {
      setUsernameValid(true)
    }
  }, [username])
  return <Page>{usernameValid ? <h1>{username}</h1> : <TrivialLogin />}</Page>
}

export default TrivialManager
