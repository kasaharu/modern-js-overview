import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { addTodo, toggleTodo } from './actions'
import todo from './reducers'
import App from './components/App'

let store = createStore(todo)

store.dispatch(addTodo('Add todo : Hello, world'))
store.dispatch(toggleTodo(0))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
