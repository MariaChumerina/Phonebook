export const CONTACT_ADD = 'CONTACT_ADD';

export const CONTACT_DELETE = 'CONTACT_DELETE';

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