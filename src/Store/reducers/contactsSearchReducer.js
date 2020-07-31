import { CONTACTS_SEARCH } from '../typesActions.js';

const initialState = '';

export const contactsSearchReducer = (state= initialState, action) => {
  switch (action.type) {
    case CONTACTS_SEARCH:
      return action.payload;
    default:
      return state;
  }
}