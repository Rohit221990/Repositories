import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components'

const store = createStore(todoApp)

render(<Root />, document.getElementById('root'))
