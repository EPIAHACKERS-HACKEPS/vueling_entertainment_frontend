import React from 'react'
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
import { useSelector } from 'react-redux'
import { selectFlight } from '../../reducers/flightReducer'

const Home = () => {
  const flight = useSelector(selectFlight)
  const departure = flight.Departure
  const arrival = flight.Arrival
  const departureDate = new Date(flight.DepartureDate)
  const arrivalDate = new Date(flight.ArrivalDate)
  const currentTime = new Date()
  const remainingTime = Math.max(
    arrivalDate.getTime() - currentTime.getTime(),
    0
  )
  const remainingHours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const remainingMinutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  )
  const totalDurationHours = Math.floor(
    (arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60)
  )
  const totalDurationMinutes = Math.floor(
    (arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60)
  )
  const totalMinutes = totalDurationHours * 60 + totalDurationMinutes
  console.log('totalMinutes', totalMinutes)
  const progress = Math.floor(
    ((totalMinutes - remainingMinutes) / totalMinutes) * 100
  )
  const formattedDepartureDate = departureDate.toLocaleString()
  const formattedArrivalDate = arrivalDate.toLocaleString()

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
          <TimeLeft>
            {remainingHours} hours and {remainingMinutes} minutes left
          </TimeLeft>
        </FlightDetails>
      </FlightStatusContainer>
    </Page>
  )
}

export default Home
