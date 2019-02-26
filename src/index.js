import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import UsersList from './UsersList'
import rootReducer from './reducers'
import './index.css'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <UsersList />
  </Provider>,
  document.getElementById('root')
)