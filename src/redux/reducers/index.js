import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'redux-react-firebase'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  firebase: firebaseStateReducer,
  routing: routerReducer
});
