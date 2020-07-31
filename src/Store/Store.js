import { combineReducers, createStore } from 'redux';
import { modalReducer } from './reducers/modalReducer.js';
import { contactsReducer } from './reducers/contactsReducer.js';
import { contactsSearchReducer } from './reducers/contactsSearchReducer.js';
import { loadState, saveState } from '../utils/sessionSaver.js';

const oldState = loadState();

const rootReducer = combineReducers({
  modal: modalReducer,
  contacts: contactsReducer,
  valueOfSearch: contactsSearchReducer,
});

export const Store = createStore(rootReducer, oldState);

Store.subscribe(() => {
  saveState(Store.getState());
});
