import { createStore, compose } from 'redux'
import { reduxReactFirebase } from 'redux-react-firebase'
import rootReducer from './reducers';

const config = {
  apiKey: "AIzaSyB4PsF-VBHf2UlnUmK2aR5mYghwpj1F9qQ",
  authDomain: "saving-money.firebaseapp.com",
  databaseURL: "https://saving-money.firebaseio.com",
  storageBucket: "saving-money.appspot.com",
  messagingSenderId: "335518301516"
};

const createStoreWithFirebase = compose(
  reduxReactFirebase(config),
)(createStore)

const store = createStoreWithFirebase(rootReducer);
export default store;
