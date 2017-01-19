import { createStore, compose } from 'redux'
import { reduxReactFirebase } from 'redux-react-firebase'
import rootReducer from './reducers';

const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
}
const createStoreWithFirebase = compose(
  reduxReactFirebase(config),
)(createStore)

const store = createStoreWithFirebase(rootReducer);
export default store;
