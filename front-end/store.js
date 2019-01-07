import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import allReducers from './config/reducers'
import { actionTypes } from './config/types'

// REDUCERS
export const reducer = allReducers;

// ACTIONS


export function initializeStore () {
  return createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
