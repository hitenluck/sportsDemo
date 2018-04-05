import {combineReducers} from 'redux'
import * as contriesReducer from './countryReducer'
export default combineReducers(Object.assign({},
  contriesReducer,
))
