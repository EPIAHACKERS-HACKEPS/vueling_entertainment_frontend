import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './components'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { RootState } from './types'
import usernameReducer from './reducers/usernameReducer'
import flightReducer from './reducers/flightReducer'

const store = configureStore<RootState>({
  reducer: {
    username: usernameReducer,
    flight: flightReducer
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
