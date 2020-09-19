import { combineReducers } from 'redux';
import UserReducer from './UserReducer'
import RecordsReducer from './RecordsReducer'

/**
 * Combines all reducers and their individual states into the
 * redux store.
 */
export default combineReducers({
    user: UserReducer,
    records: RecordsReducer
});