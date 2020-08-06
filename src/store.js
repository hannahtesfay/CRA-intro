import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thingsReducer from './reducers/thingsReducer.js'
import { newItem } from './actions/index.js'

const store = createStore(thingsReducer, composeWithDevTools(applyMiddleware()))

const dispatch = store.dispatch(newItem())

export default store;