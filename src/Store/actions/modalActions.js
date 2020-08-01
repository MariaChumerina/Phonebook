import { CLOSE_MODAL, OPEN_MODAL } from '../typesActions.js';

export function openModal() {
  return {
    type: OPEN_MODAL,
    payload: true,
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    payload: false,
  }
}
