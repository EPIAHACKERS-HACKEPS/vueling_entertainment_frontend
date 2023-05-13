import React, { useEffect } from 'react'
import {
  ArrivalCity,
  DepartureCity,
  FlightDetails,
  FlightStatusContainer,
  ProgressBar,
  ProgressBarContainer,
  TimeLeft
} from './styles'
import { Page } from '../Page'
import { useDispatch, useSelector } from 'react-redux'
import { selectFlight, setFlight } from '../../reducers/flightReducer'
import { FlightInfo } from '../../types'

const Home = () => {
  const flight = useSelector(selectFlight)
  const dispatch = useDispatch()

  useEffect(() => {
    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch('http://127.0.0.1/info', requestOptions)
      .then((response) => response.json())
      .then((result: FlightInfo) => dispatch(setFlight(result)))
      .catch((error) => console.log('error', error))
  }, [])

  const departure = flight.Departure
  const arrival = flight.Arrival
  const departureDate = new Date(flight.DepartureDate)
  const arrivalDate = new Date(flight.ArrivalDate)
  const currentTime = new Date()
  const remainingTime = Math.max(
    arrivalDate.getTime() - currentTime.getTime(),
    0
  )
  const remainingMinutes = Math.floor(remainingTime / (1000 * 60))
  const totalDurationMinutes = Math.floor(
    (arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60)
  )
  const progress = Math.floor(
    ((totalDurationMinutes - remainingMinutes) / totalDurationMinutes) * 100
  )
  const formattedDepartureDate = departureDate.toLocaleString()
  const formattedArrivalDate = arrivalDate.toLocaleString()

  let flightStatus = ''
  if (arrivalDate < currentTime) {
    flightStatus = 'Landed'
  } else if (departureDate > currentTime) {
    flightStatus = 'Awaiting flight'
  } else {
    const remainingDays = Math.floor(remainingMinutes / (60 * 24))
    const remainingHours = Math.floor((remainingMinutes % (60 * 24)) / 60)
    const remainingMinutesRemainder = (remainingMinutes % (60 * 24)) % 60

    if (remainingDays > 0) {
      flightStatus = `Flying - ${remainingDays} day${
        remainingDays === 1 ? '' : 's'
      } and ${remainingHours} hour${remainingHours === 1 ? '' : 's'} remaining`
    } else if (remainingHours > 0) {
      flightStatus = `Flying - ${remainingHours} hour${
        remainingHours === 1 ? '' : 's'
      } and ${remainingMinutesRemainder} minute${
        remainingMinutesRemainder === 1 ? '' : 's'
      } remaining`
    } else {
      flightStatus = `Flying - ${remainingMinutesRemainder} minute${
        remainingMinutesRemainder === 1 ? '' : 's'
      } remaining`
    }
  }

  return (
    <Page>
      <FlightStatusContainer>
        <FlightDetails>
          <ArrivalCity>{departure}</ArrivalCity>
          <DepartureCity>{arrival}</DepartureCity>
          <ArrivalCity>{formattedDepartureDate}</ArrivalCity>
          <DepartureCity>{formattedArrivalDate}</DepartureCity>
          <ProgressBarContainer>
            <ProgressBar progress={progress} />
          </ProgressBarContainer>
          <TimeLeft>{flightStatus}</TimeLeft>
        </FlightDetails>
      </FlightStatusContainer>
    </Page>
  )
}

export default Home
