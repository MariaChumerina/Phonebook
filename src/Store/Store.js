import { combineReducers, compose, createStore } from 'redux';
import { modalReducer } from './reducers/modalReducer.js';
import { contactsReducer } from './reducers/contactsReducer.js';
import { contactsSearchReducer } from './reducers/contactsSearchReducer.js';


const rootReducer = combineReducers({
  modal: modalReducer,
  contacts: contactsReducer,
  filteredContacts: contactsSearchReducer,
});

export const Store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));
