import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import user from './user'

const rootReducer = combineReducers({
  user,
  form,
  routing: routerReducer
})

export default rootReducer
