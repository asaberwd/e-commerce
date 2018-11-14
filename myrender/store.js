import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import cartReducer from './reducers/cartReducer'
import proCounterReducer from './reducers/proCounterReducser'
import userReducer from './reducers/userReducer'

const exampleInitialState = {
  counter: 0
}


// REDUCERS



// my reducer code


const reducers = combineReducers({
  cart : cartReducer,
  counter : proCounterReducer,
  user : userReducer
})
//my code end here



// ACTIONS



export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}