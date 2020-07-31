import { CLOSE_MODAL, OPEN_MODAL } from '../typesActions.js';

const initialState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { isOpen: action.payload };
    case CLOSE_MODAL:
      return { isOpen: action.payload };
    default:
      return state;
  }
}