import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/app'
import reducers from './reducers'
import { AUTH_USER} from './actions/types'
import history from './history'

// Add middleware to your store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
// create your store with the middleware added
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update applicax``tion state
  store.dispatch({ type: AUTH_USER })
}
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.querySelector('#root'))