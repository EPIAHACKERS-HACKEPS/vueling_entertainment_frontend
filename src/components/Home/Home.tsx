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

  // Access flight properties
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

  // Calculate total hours and minutes
  const totalDurationHours = Math.floor(
    (arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60)
  )
  const totalDurationMinutes = Math.floor(
    (arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60)
  )

  // Calculate total minutes including minutes from the hours
  const totalMinutes = totalDurationHours * 60 + totalDurationMinutes
  console.log('totalMinutes', totalMinutes)

  // Calculate progress
  const progress = Math.floor(
    ((totalMinutes - remainingMinutes) / totalMinutes) * 100
  )

  // Format departure and arrival dates
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
