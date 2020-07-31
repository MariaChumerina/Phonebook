import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../Store/actions/contactsActions.js';
import './ListItem.css';

const ListItem = ({ name, number, deleteContact }) => {
  const handleRemove = () => {
    deleteContact(number);
  };

  return (
    <li>
      <div className="contact-item">
        <p>
          {name}
        </p>
        <p>
          {number}
        </p>
      </div>
      <button type="button" className="btn-link btn-delete-position" onClick={handleRemove}>
        &#10005;
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  deleteContact,
};

export default connect(null, mapDispatchToProps)(ListItem);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
