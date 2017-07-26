import { combineReducers } from 'redux'
import eventFilter from './eventFilterReducer'
import fullDetails from './fullDetailsReducer'

const rootReducer = combineReducers({
events :eventFilter,
fullDetails : fullDetails
})


export default rootReducer
