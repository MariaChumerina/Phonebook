import * as React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../Store/actions/contactsActions.js';

const ListItem = ({ name, number, deleteContact }) => {
  const handleRemove = () => {
    deleteContact(number);
  }

  return (
      <li>
        <p>
          {name}: {number}
        </p>
        <button className="btn-link btn-delete-position" onClick={handleRemove}>&#10005;</button>
      </li>
  );
}

const mapDispatchToProps = {
  deleteContact,
}

export default connect(null, mapDispatchToProps)(ListItem);