interface SetUsernameAction {
  type: 'SET_USERNAME';
  payload: string;
}

export const setUsername = (username: string): SetUsernameAction => ({
  type: 'SET_USERNAME',
  payload: username
})
