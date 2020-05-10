import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import './assets/styles/custom.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, root)
