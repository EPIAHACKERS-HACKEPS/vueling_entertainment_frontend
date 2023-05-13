export interface UsernameState {
  username: string;
}

export interface FlightState {
  Departure: string;
  Arrival: string;
  DepartureDate: string;
  ArrivalDate: string;
}

export interface RootState {
  username: UsernameState;
  flight: FlightState;
}
