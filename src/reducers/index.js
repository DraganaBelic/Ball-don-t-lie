import {combineReducers} from 'redux'
import loginReducer from './reducer'
import {reducer as formReducer} from 'redux-form'
import { connectRouter } from 'connected-react-router'



export default (history) => combineReducers({
    router: connectRouter(history),
    firstState: loginReducer,
    form: formReducer
  })