import { CONTACTS_SEARCH } from '../typesActions.js';

const initialState = {
  contact: '',
}

export const contactsSearchReducer = (state= initialState, action) => {
  switch (action.type) {
    case CONTACTS_SEARCH:
      return { contact: action.payload };
    default:
      return state;
  }
}