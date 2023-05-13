interface SetFlightAction {
  type: 'SET_FLIGHT';
  payload: string;
}

export const setFlight = (username: string): SetFlightAction => ({
  type: 'SET_FLIGHT',
  payload: username
})
