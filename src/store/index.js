import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer} from '@/common/Home/store'


const reducer = combineReducers({
  home: HomeReducer
})

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  const defaultStore = window.context.state
  return createStore(reducer, defaultStore, applyMiddleware(thunk))
}