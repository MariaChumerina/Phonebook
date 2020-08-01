import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactsList.css';
import ContactItem from '../ContactItem/ContactItem.jsx';

const ContactsList = ({ contacts }) => {
  const renderListItems = () => (contacts.map((contact) => {
    const { name, number } = contact;
    return <ContactItem name={name} number={number} key={number} />;
  }));

  return (
    <div>
      <ul>
        {contacts.length ? renderListItems() : 'Пусто'}
      </ul>
    </div>
  );
};

function filterContacts(state) {
  return state.valueOfSearch.length
    ? state.contacts.contacts
      .filter((contact) => contact.name.toLowerCase().includes(state.valueOfSearch.toLowerCase()))
    : state.contacts.contacts;
}

const mapStateToProps = (state) => ({
  contacts: filterContacts(state),
});

export default connect(mapStateToProps, null)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
