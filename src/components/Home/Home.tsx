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

const Home = () => {
  const flightStatus = {
    arrivalCity: 'New York',
    departureCity: 'London',
    timeLeft: '2 hours 30 minutes',
    progress: 50
  }

  return (
    <Page>
      <FlightStatusContainer>
        <FlightDetails>
          <ArrivalCity>{flightStatus.arrivalCity}</ArrivalCity>
          <DepartureCity>{flightStatus.departureCity}</DepartureCity>
          <TimeLeft>{flightStatus.timeLeft}</TimeLeft>
        </FlightDetails>

        <ProgressBarContainer>
          <ProgressBar progress={flightStatus.progress} />
        </ProgressBarContainer>
      </FlightStatusContainer>
    </Page>
  )
}

export default Home
