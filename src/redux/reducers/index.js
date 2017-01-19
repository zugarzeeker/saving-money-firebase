import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'redux-react-firebase'

export default combineReducers({
  firebase: firebaseStateReducer
});
