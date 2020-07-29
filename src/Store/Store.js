import { combineReducers, compose, createStore } from 'redux';
import { modalReducer } from './reducers/modalReducer.js';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export const Store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));