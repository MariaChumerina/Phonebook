import { combineReducers, createStore } from 'redux';
import { modalReducer } from './reducers/modalReducer.js';
import { contactsReducer } from './reducers/contactsReducer.js';
import { contactsSearchReducer } from './reducers/contactsSearchReducer.js';

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {

  }
};

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const oldState = loadState();

const rootReducer = combineReducers({
  modal: modalReducer,
  contacts: contactsReducer,
  filteredContacts: contactsSearchReducer,
});

export const Store = createStore(rootReducer, oldState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

Store.subscribe(() => {
  saveState(Store.getState());
});