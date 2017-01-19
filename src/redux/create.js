import { createStore, compose } from 'redux'
import { reduxReactFirebase } from 'redux-react-firebase'

const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
}
const createStoreWithFirebase = compose(
  reduxReactFirebase(config),
)(createStore)

export default createStoreWithFirebase;
