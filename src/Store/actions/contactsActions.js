import { CONTACT_ADD, CONTACT_DELETE, CONTACTS_SEARCH } from '../typesActions.js';

export function addContact(contact) {
  return {
    type: CONTACT_ADD,
    payload: contact,
  }
}

export function deleteContact(id) {
  return {
    type: CONTACT_DELETE,
    payload: id,
  }
}

export function searchContacts(contact) {
  return {
    type: CONTACTS_SEARCH,
    payload: contact,
  }
}
