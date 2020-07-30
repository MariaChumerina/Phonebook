import { CONTACT_ADD, CONTACT_DELETE } from '../actions/contactsActions.js';

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return { ...state, contacts: state.contacts.concat(action.payload) };
    case CONTACT_DELETE:
      const updatedState = state.contacts.filter((contact) => contact.number !== action.payload);
      return { contacts: updatedState };
    default:
      return state;
  }
}